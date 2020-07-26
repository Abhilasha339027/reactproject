import time #to control how often the sensor data is collected
from w1thermsensor import W1ThermSensor # talk to the sensor
sensor = W1ThermSensor() #to store a connection the sensor

while True: # to get the temperature sensor data every second, and run forever

    temperature = sensor.get_temperature() #to get the current temperature from the thermal sensor

    print("The temperature is %s celsius" % temperature) # print it to the screen
    
    time.sleep(1) #tell the Raspberry Pi to wait for 1 second between taking a temperature reading.