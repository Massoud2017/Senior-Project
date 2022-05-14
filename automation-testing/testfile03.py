# Test File 03: Login using an account

import unittest
import time
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class LoginTest(unittest.TestCase):
  def test_login(self):
    PATH = '/Users/ducnguyen/Programs/chromedriver'
    WEBPAGE = 'https://627b5ea53f081c390b1a93f2--thriving-creponne-382db8.netlify.app'
    WAITTIME = 5  #-- in seconds
    SHOWTIME = 2  #-- in seconds

    email = 'johnnydoe@email.com'
    password = 'johnnyHASapass.123'

    self.driver = webdriver.Chrome(PATH)
    self.driver.maximize_window()
    self.driver.implicitly_wait(WAITTIME)
    self.driver.get(WEBPAGE)

    print('\n\n\n')
    print('START TESTING......................')

    print('\nTesting the webpage\'s title...')
    title = self.driver.title
    self.assertEqual('Pho Ru', title, 'Title is not Pho Ru' )
    print('Passed: The title is Pho Ru.')

    #-- Go to Sign In page
    time.sleep(SHOWTIME)
    print('\nGo to Sign In page by clicking on Sign In button...')
    signin = self.driver.find_element(by=By.CLASS_NAME, value='login-btn')
    signin.click()
    WebDriverWait(self.driver, WAITTIME).until(
      EC.presence_of_element_located((By.CLASS_NAME, 'login-container'))
    )
    print('Passed: The Sign In Page is presented.')

    #-- Fill in form info
    time.sleep(SHOWTIME)
    print('\nFill in login information...')
    femail = self.driver.find_element(by=By.XPATH, value='//input[@placeholder="Email"]')
    femail.send_keys(email)
    print('\tEmail: ' + email)
    fpassword = self.driver.find_element(by=By.XPATH, value='//input[@placeholder="Password"]')
    fpassword.send_keys(password)
    print('\tPassword: ' + password)
    time.sleep(SHOWTIME)
    signin_btn = self.driver.find_element(by=By.CLASS_NAME, value='form-login-btn')
    signin_btn.click()
    print('\nClick on sign in button...')

    print('\nCheck if Profile button show up after logged in...')
    WebDriverWait(self.driver, WAITTIME).until(
      EC.presence_of_element_located((By.CLASS_NAME, 'prof-button'))
    )
    print('Passed: Profile button is presented.')

    print('\nCheck if Sign Out button show up after logged in...')
    WebDriverWait(self.driver, WAITTIME).until(
      EC.presence_of_element_located((By.CLASS_NAME, 'logout-button'))
    )
    print('Passed: Sign Out button is presented.')

    print('\nGo to profile page...')
    profile_btn = self.driver.find_element(by=By.CLASS_NAME, value='prof-button')
    profile_btn.click()
    WebDriverWait(self.driver, WAITTIME).until(
      #-- wait till user email is loaded on profile page
      EC.text_to_be_present_in_element((By.CLASS_NAME, 'basicInfoColumn'), email)
    )
    print('Passed: Profile page is presented.')
    userinfo = self.driver.find_element(by=By.CLASS_NAME, value='basicInfoColumn')
    print('\nProfile Page has correct user info...')
    print(userinfo.text)
    
    time.sleep(SHOWTIME)
    self.driver.quit()

if __name__ == '__main__':
    unittest.main(verbosity=2)