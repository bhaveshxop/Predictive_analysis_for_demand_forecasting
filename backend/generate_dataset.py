import csv
import pandas as pd
import math
import random

category = ['electronics', 'beverages', 'clothing', 'travel', 'beauty']   

electronics = ['mobile', 'laptop', 'headphones', 'camera', 'television', 'printer', 'speaker', 'smartwatch', 'tablet', 'heater']
electronics_base_seales = [25, 14, 29, 9, 12, 6, 4, 8, 10 , 4]

beverages = ['coffee power', 'softdrink', 'juice', 'energydrink', 'milk']
beverages_base_seales = [20, 32, 20, 17, 10, 20]

clothing = ['saree', 'kurta', 'lehenga', 'jeans', 'shirt', 'tshirt', 'trouser', 'jacket', 'blazer', 'suit']
clothing_base_seales = [10, 15, 8, 20, 25, 30, 15, 10, 5, 5]

travel = ['powerbank', 'backpack', 'luggage', 'trolley', 'bag', 'wallet', 'sunglasses', 'watch', 'shoes', 'umbrella']
travel_base_seales = [30, 25, 20, 15, 10, 20, 10, 15, 25, 20]

beauty = ['lipstick', 'eyeliner', 'mascara', 'foundation', 'compact', 'kajal', 'nailpolish', 'perfume', 'shampoo', 'conditioner']
beauty_base_seales = [20, 25, 15, 10, 10, 20, 20, 10, 30, 25]

days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
seasons = ['summer', 'winter', 'rainy']

# Create a CSV file and write the header
with open('dataset.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(['Year', 'Month', 'Day', 'Category', 'Product', 'Sales'])

    for year in range(2018, 2021):
        for month in months:
            # season according to indian weather
            if month in ['march', 'april', 'may']:
                season = 'summer'
            elif month in ['june', 'july', 'august']:
                season = 'rainy'
            else:
                season = 'winter'

            for day in days:
                for cat in category:
                    if cat == 'electronics':
                        for i in range(0, len(electronics)):
                            # Set is festival true or false randomly
                            isFestival = random.choice([True, False])
                            isWeekend = random.choice([True, False])
                            if day == 'sunday' or day == 'saturday':
                                isWeekend = True

                            if season == 'winter' and electronics[i] == 'heater':
                                # Increase sales by 180% to 200% randomly
                                baseSales = electronics_base_seales[i] + (electronics_base_seales[i] * random.randint(180, 200) / 100)
                            if season == 'rainy' and electronics[i] == 'heater':
                                # Increase sales by 100% to 120% randomly
                                baseSales = electronics_base_seales[i] + (electronics_base_seales[i] * random.randint(100, 130) / 100)
                            if season == 'summer' and electronics[i] == 'heater':
                                # Increase sales by 50% to 60% randomly
                                baseSales = electronics_base_seales[i] + (electronics_base_seales[i] * random.randint(10, 25) / 100)

                            # Increase sales by 50 to 60% randomly
                            baseSales = electronics_base_seales[i] + (electronics_base_seales[i] * random.randint(50, 60) / 100)
                            
                            if isFestival:
                                # Increase sales randomly by 20 to 35%
                                baseSales = baseSales + (baseSales * random.randint(20, 35) / 100)
                            if isWeekend:
                                # Increase sales randomly by 10 to 20%
                                baseSales = baseSales + (baseSales * random.randint(10, 20) / 100)
                            if isFestival and isWeekend:
                                # Increase sales ramdomly by 22 to 28%
                                baseSales = baseSales + (baseSales * random.randint(22, 28) / 100)

                            baseSales = math.ceil(baseSales)

                            # Write the data to the CSV file
                            writer.writerow([year, month, day, cat, electronics[i], baseSales, isFestival, isWeekend])
                    elif cat == 'beverages':
                        for i in range(0, len(beverages)):
                            isFestival = random.choice([True, False])
                            isWeekend = random.choice([True, False])
                            if day == 'sunday' or day == 'saturday':
                                isWeekend = True
                            baseSales = beverages_base_seales[i] + (beverages_base_seales[i] * random.randint(50, 60) / 100)
                            if isFestival:
                                baseSales = baseSales + (baseSales * random.randint(15, 17) / 100)
                            if isWeekend:
                                baseSales = baseSales + (baseSales * random.randint(30, 35) / 100)
                            if isFestival and isWeekend:
                                baseSales = baseSales + (baseSales * random.randint(22, 28) / 100)
                            baseSales = math.ceil(baseSales)
                            writer.writerow([year, month, day, cat, beverages[i], baseSales, isFestival, isWeekend])
                    
                    elif cat == 'clothing':
                        for i in range(0, len(clothing)):
                            isFestival = random.choice([True, False])
                            isWeekend = random.choice([True, False])
                            if day == 'sunday' or day == 'saturday':
                                isWeekend = True
                            baseSales = clothing_base_seales[i] + (clothing_base_seales[i] * random.randint(50, 60) / 100)
                            if isFestival:
                                baseSales = baseSales + (baseSales * random.randint(50, 60) / 100)
                            if isWeekend:
                                baseSales = baseSales + (baseSales * random.randint(10, 15) / 100)
                            if isFestival and isWeekend:
                                baseSales = baseSales + (baseSales * random.randint(25, 28) / 100)
                            baseSales = math.ceil(baseSales)
                            writer.writerow([year, month, day, cat, clothing[i], baseSales, isFestival, isWeekend])

                    elif cat == 'travel':
                        for i in range(0, len(travel)):
                            isFestival = random.choice([True, False])
                            isWeekend = random.choice([True, False])
                            if day == 'sunday' or day == 'saturday':
                                isWeekend = True
                            baseSales = travel_base_seales[i] + (travel_base_seales[i] * random.randint(50, 60) / 100)
                            if isFestival:
                                baseSales = baseSales + (baseSales * random.randint(15, 17) / 100)
                            if isWeekend:
                                baseSales = baseSales + (baseSales * random.randint(30, 35) / 100)
                            if isFestival and isWeekend:
                                baseSales = baseSales + (baseSales * random.randint(10, 14) / 100)
                            baseSales = math.ceil(baseSales)
                            writer.writerow([year, month, day, cat, travel[i], baseSales, isFestival, isWeekend])

                    elif cat == 'beauty':
                        for i in range(0, len(beauty)):
                            isFestival = random.choice([True, False])
                            isWeekend = random.choice([True, False])
                            if day == 'sunday' or day == 'saturday':
                                isWeekend = True
                            baseSales = beauty_base_seales[i] + (beauty_base_seales[i] * random.randint(50, 60) / 100)
                            if isFestival:
                                baseSales = baseSales + (baseSales * random.randint(18, 24) / 100)
                            if isWeekend:
                                baseSales = baseSales + (baseSales * random.randint(10, 12) / 100)
                            if isFestival and isWeekend:
                                baseSales = baseSales + (baseSales * random.randint(6, 10) / 100)
                            baseSales = math.ceil(baseSales)
                            writer.writerow([year, month, day, cat, beauty[i], baseSales, isFestival, isWeekend])

