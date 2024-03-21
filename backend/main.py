import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import LabelEncoder
import pickle

def train_model():        
    df = pd.read_csv('dataset.csv')

    # Convert categorical variables to numerical
    label_encoders = {}
    for column in ['Month', 'Day', 'Category', 'Product', 'IsFestival', 'IsWeekend', 'Season']:
        le = LabelEncoder()
        df[column] = le.fit_transform(df[column])
        label_encoders[column] = le

    # Train a Random Forest model
    X = df.drop('Sales', axis=1)
    y = df['Sales']
    rf = RandomForestRegressor()
    rf.fit(X, y)

    #store the model in a pickle file
    with open('model.pkl', 'wb') as model_file:
        pickle.dump(rf, model_file)

    #store the label encoders in a pickle file
    with open('label_encoders.pkl', 'wb') as le_file:
        pickle.dump(label_encoders, le_file)

def daily_predict_sales(year, month, day, category, product, is_festival, is_weekend, season):
    with open('model.pkl', 'rb') as model_file:
        model = pickle.load(model_file)
    with open('label_encoders.pkl', 'rb') as le_file:
        label_encoders = pickle.load(le_file)
    new_data = {
        'Year': [year],
        'Month': [month],
        'Day': [day],
        'Category': [category],
        'Product': [product],
        'IsFestival': [is_festival],
        'IsWeekend': [is_weekend],
        'Season': [season]
    }
    new_df = pd.DataFrame(new_data)
    for column in ['Month', 'Day', 'Category', 'Product', 'IsFestival', 'IsWeekend', 'Season']:
        new_df[column] = label_encoders[column].transform(new_df[column])
    prediction = model.predict(new_df)
    return prediction[0]

# train_model()
print(daily_predict_sales(2022, "january", "monday", 'electronics', 'mobile', False, False, 'winter'))
print(daily_predict_sales(2022, "january", "monday", 'electronics', 'mobile', True, False, 'winter'))
print(daily_predict_sales(2022, "january", "monday", 'electronics', 'mobile', False, True, 'winter'))
print(daily_predict_sales(2022, "january", "monday", 'electronics', 'mobile', True, True, 'winter'))