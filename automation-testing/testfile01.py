# Test File 01: Navigate between pages

#-- Import webdriver from selenium
from selenium import webdriver
import time

#-- Provide path to ChromeDriver
PATH = '/Users/ducnguyen/Programs/chromedriver'

#-- Select the driver we want to use, and specify the webdriver 
#-- for this web browser
driver = webdriver.Chrome(PATH)
driver.maximize_window()

#-- Open PhoRu website
driver.get('http://localhost:3000')

#-- To get the title of the website
print(driver.title)

#-- Check About Page button
time.sleep(2)
about = driver.find_element_by_class_name('about-btn')
about.click()
time.sleep(2)

#-- Check Pho Ru Logo button
time.sleep(2)
logo = driver.find_element_by_class_name('logo')
logo.click()

#-- Check Contact Page button
time.sleep(2)
contact = driver.find_element_by_class_name('contact-btn')
contact.click()
time.sleep(2)

#-- Check Pho Ru Home Page button
time.sleep(2)
home = driver.find_element_by_class_name('PhoRu')
home.click()

#-- Check Menu Page button
time.sleep(2)
menu = driver.find_element_by_class_name('menu-1')
menu.click()

#-- Check Cart button
time.sleep(2)
cart = driver.find_element_by_class_name('cart-btn-img')
cart.click()
time.sleep(2)
cart.click()

#-- Check Sign In button
time.sleep(2)
signin = driver.find_element_by_class_name('login-btn')
signin.click()

#-- Check Sign Up button
time.sleep(2)
signup = driver.find_element_by_class_name('login-btn-signup')
signup.click()


#-- To close the entire browser
time.sleep(3)
driver.quit()