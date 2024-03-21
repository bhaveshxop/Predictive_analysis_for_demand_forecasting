import pandas as pd
import pickle
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.ensemble import StackingRegressor
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor
from sklearn.neighbors import KNeighborsRegressor

def forcasted_sales(year, month, day, category, product, is_festival, is_weekend, season):
    # Input data from the user
    input_data = {}  # Initialize an empty dictionary to store user input

    # Prompt the user to enter values for each feature
    # for feature in features[:-1]:  # Exclude 'Sales' column
    #     value = input(f"Enter value for {feature}: ")
    #     input_data[feature] = [value]  # Store the user input in the dictionary

    input_data['Year'] = [year]
    input_data['Month'] = [month]
    input_data['Day'] = [day]
    input_data['Category'] = [category]
    input_data['Product'] = [product]
    input_data['IsFestival'] = [is_festival]
    input_data['IsWeekend'] = [is_weekend]
    input_data['Season'] = [season]

    
    # Convert the user input into a DataFrame
    input_df = pd.DataFrame(input_data)

    # Load the stacked model and preprocessor from disk
    with open('stacked_model.pkl', 'rb') as model_file:
        model = pickle.load(model_file)
    
    with open('preprocessor.pkl', 'rb') as preprocessor_file:
        preprocessor = pickle.load(preprocessor_file)

    # Preprocess the input data using the preprocessor
    input_processed = preprocessor.transform(input_df)

    # Make predictions using the stacked model
    predicted_sales = model.predict(input_processed)
    
    return predicted_sales[0]

def getSalesModel():
    train_data = pd.read_csv('dataset.csv')

    # Define features and target
    features = ['Year', 'Month', 'Day', 'Category', 'Product', 'IsFestival', 'IsWeekend', 'Season', 'Sales']
    target = 'Sales'

    # Split features and target
    X_train = train_data[features[:-1]]  # Excluding the target column 'Sales'
    y_train = train_data[target]

    # Define the preprocessing steps for numeric and categorical features
    numeric_features = ['Year']
    categorical_features = ['Month', 'Day', 'Category', 'Product', 'IsFestival', 'IsWeekend', 'Season']

    numeric_transformer = Pipeline(steps=[
        ('imputer', SimpleImputer(strategy='mean')),
        ('scaler', StandardScaler())
    ])

    categorical_transformer = Pipeline(steps=[
        ('imputer', SimpleImputer(strategy='most_frequent')),
        ('onehot', OneHotEncoder(handle_unknown='ignore'))
    ])

    preprocessor = ColumnTransformer(
        transformers=[
            ('num', numeric_transformer, numeric_features),
            ('cat', categorical_transformer, categorical_features)
        ])

    # Fit the preprocessor to the training data
    preprocessor.fit(X_train)

    # Define the base models for the stacked model
    base_models = [
        ('rf', RandomForestRegressor(max_depth=None, min_samples_split=10, n_estimators=50, random_state=42)),
        ('knn', KNeighborsRegressor(weights='distance'))
    ]

    # Define the meta-model for the stacked model
    meta_model = LinearRegression()

    # Create the StackingRegressor
    stacked_model = StackingRegressor(estimators=base_models, final_estimator=meta_model)

    # Fit the stacked model to the training data
    stacked_model.fit(preprocessor.transform(X_train), y_train)

    # Save the stacked model and preprocessor to disk
    with open('stacked_model.pkl', 'wb') as model_file:
        pickle.dump(stacked_model, model_file)
    
    with open('preprocessor.pkl', 'wb') as preprocessor_file:
        pickle.dump(preprocessor, preprocessor_file)

    return stacked_model, preprocessor
