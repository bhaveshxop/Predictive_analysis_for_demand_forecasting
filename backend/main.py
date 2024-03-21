import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.metrics import mean_squared_error
import pickle

# Load the dataset
data = pd.read_csv('dataset.csv')

# Separate features and target variable
X = data.drop('Sales', axis=1)
y = data['Sales']

# Define categorical columns
categorical_cols = ['Month', 'Day', 'Category', 'Product', 'IsFestival', 'IsWeekend', 'Season']

# Define preprocessing steps
preprocessor = ColumnTransformer(
    transformers=[
        ('cat', OneHotEncoder(), categorical_cols)
    ])

# Create a Random Forest regressor
rf_regressor = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('regressor', RandomForestRegressor(n_estimators=100, random_state=42))
])

# Train the model using all the data
rf_regressor.fit(X, y)

# Take input from the user
user_input = pd.DataFrame(columns=X.columns)
for column in X.columns:
    user_input[column] = [input(f"Enter value for {column}: ")]

#save the model
with open('model.pkl', 'wb') as model_file:
    pickle.dump(rf_regressor, model_file)

#save the preprocessor
with open('preprocessor.pkl', 'wb') as preprocessor_file:
    pickle.dump(preprocessor, preprocessor_file)

# Preprocess the user input
user_input_processed = preprocessor.transform(user_input)

# Make predictions
y_pred = rf_regressor.predict(user_input_processed)

# Print the predicted sales
print(f'Predicted Sales: {y_pred}')
