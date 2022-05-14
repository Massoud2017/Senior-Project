# Test File 01: Navigate between pages

import unittest
import time
#-- Import webdriver from selenium
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class PageNavigateTest(unittest.TestCase):
  def test_page_navigation(self):
    #-- Provide path to ChromeDriver
    PATH = '/Users/ducnguyen/Programs/chromedriver'
    WEBPAGE = 'https://627b5ea53f081c390b1a93f2--thriving-creponne-382db8.netlify.app'
    WAITTIME = 5  #-- seconds
    SHOWTIME = 2  #-- in seconds

    #-- Select the driver we want to use, and specify the webdriver 
    #-- for this web browser
    self.driver = webdriver.Chrome(PATH)
    self.driver.maximize_window()

    #-- Open PhoRu website
    self.driver.get(WEBPAGE)

    self.driver.implicitly_wait(WAITTIME)

    print('\n\n\n')
    print('START TESTING......................')

    #-- Check the title of the website
    print('\nTesting the webpage\'s title...')
    title = self.driver.title
    self.assertEqual('Pho Ru', title, 'Title is not Pho Ru' )
    print('Passed: The title is Pho Ru.')

    #-- Check About Page button
    time.sleep(SHOWTIME)
    print('\nTesting About page by clicking on About button...')
    about = self.driver.find_element(by=By.CLASS_NAME, value='about-btn')
    about.click()
    WebDriverWait(self.driver, WAITTIME).until(
      EC.presence_of_element_located((By.CLASS_NAME, 'about-title'))
    )
    print('Passed: The About Page is presented.')

    #-- Check Pho Ru Logo button
    time.sleep(SHOWTIME)
    print('\nTesting Home page by clicking on Logo button...')
    logo = self.driver.find_element(by=By.CLASS_NAME, value='logo')
    logo.click()
    WebDriverWait(self.driver, WAITTIME).until(
      EC.presence_of_element_located((By.CLASS_NAME, 'intro-header'))
    )
    print('Passed: The Home Page is presented.')

    #-- Check Contact Page button
    time.sleep(SHOWTIME)
    print('\nTesting Contact page by clicking on Contact button...')
    contact = self.driver.find_element(by=By.CLASS_NAME, value='contact-btn')
    contact.click()
    WebDriverWait(self.driver, WAITTIME).until(
      EC.presence_of_element_located((By.CLASS_NAME, 'map-router'))
    )
    print('Passed: The Contact Page is presented.')

    #-- Check Pho Ru Home Page button
    time.sleep(SHOWTIME)
    print('\nTesting Home page by clicking on Pho Ru button...')
    home = self.driver.find_element(by=By.CLASS_NAME, value='PhoRu')
    home.click()
    WebDriverWait(self.driver, WAITTIME).until(
      EC.presence_of_element_located((By.CLASS_NAME, 'intro-header'))
    )
    print('Passed: The Home Page is presented.')

    #-- Check Menu Page button
    time.sleep(SHOWTIME)
    print('\nTesting Menu page by clicking on Menu button...')
    menu = self.driver.find_element(by=By.CLASS_NAME, value='menu-1')
    menu.click()
    WebDriverWait(self.driver, WAITTIME).until(
      EC.presence_of_element_located((By.CLASS_NAME, 'item-container'))
    )
    print('Passed: The Menu Page is presented.')

    #-- Check Cart button
    time.sleep(SHOWTIME)
    print('\nTesting Shopping Cart element by clicking on Cart icon...')
    cart = self.driver.find_element(by=By.CLASS_NAME, value='cart-btn-img')
    cart.click()
    cart.click()
    print('Passed: The Cart area is presented.')

    #-- Check Sign In button
    time.sleep(SHOWTIME)
    print('\nTesting Sign In page by clicking on Sign In button...')
    signin = self.driver.find_element(by=By.CLASS_NAME, value='login-btn')
    signin.click()
    WebDriverWait(self.driver, WAITTIME).until(
      EC.presence_of_element_located((By.CLASS_NAME, 'login-container'))
    )
    print('Passed: The Sign In Page is presented.')

    #-- Check Sign Up button
    time.sleep(SHOWTIME)
    print('\nTesting Sign Up page by clicking on Register button...')
    signup = self.driver.find_element(by=By.CLASS_NAME, value='login-btn-signup')
    signup.click()
    WebDriverWait(self.driver, WAITTIME).until(
      EC.presence_of_element_located((By.CLASS_NAME, 'Register-Background'))
    )
    print('Passed: The Sign Up Page is presented.')

    #-- To close the entire browser
    time.sleep(SHOWTIME)
    self.driver.quit()

if __name__ == '__main__':
    unittest.main(verbosity=2)