# Test File 02: Register a new account

import unittest
import time
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class SignUpTest(unittest.TestCase):
  def test_register_account(self):
    PATH = '/Users/ducnguyen/Programs/chromedriver'
    WEBPAGE = 'https://627b5ea53f081c390b1a93f2--thriving-creponne-382db8.netlify.app'
    WAITTIME = 5  #-- in seconds
    SHOWTIME = 2  #-- in seconds

    firstname = 'Johnny'
    lastname = 'Doe'
    firstcar = 'Pontiac'
    townname = 'Lalaland'
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

    #-- Go to Sign Up page
    time.sleep(SHOWTIME)
    print('\nGo to Sign Up page by clicking on Register button...')
    signup = self.driver.find_element(by=By.CLASS_NAME, value='login-btn-signup')
    signup.click()
    WebDriverWait(self.driver, WAITTIME).until(
      EC.presence_of_element_located((By.CLASS_NAME, 'Register-Background'))
    )
    print('Passed: The Sign Up Page is presented.')

    #-- Fill in form info
    time.sleep(SHOWTIME)
    print('\nFill in register information...')
    ffirstname = self.driver.find_element(by=By.NAME, value='name')
    ffirstname.send_keys(firstname)
    print('\tFirst Name: ' + firstname)
    flastname = self.driver.find_element(by=By.NAME, value='last_name')
    flastname.send_keys(lastname)
    print('\tLast Name: ' + lastname)
    ffirstcar = self.driver.find_element(by=By.NAME, value='question_one')
    ffirstcar.send_keys(firstcar)
    print('\tFirst Car: ' + firstcar)
    ftownname = self.driver.find_element(by=By.NAME, value='question_two')
    ftownname.send_keys(townname)
    print('\tTown: ' + townname)
    femail = self.driver.find_element(by=By.NAME, value='username')
    femail.send_keys(email)
    print('\tEmail: ' + email)
    fpassword = self.driver.find_element(by=By.NAME, value='password')
    fpassword.send_keys(password)
    print('\tPassword: ' + password)
    fconfirmpass = self.driver.find_element(by=By.NAME, value='passwordConfirmation')
    fconfirmpass.send_keys(password)
    print('\tConfirm Password: ' + password)
    time.sleep(SHOWTIME)
    signup_btn = self.driver.find_element(by=By.XPATH, value='//button[@type="submit"]')
    signup_btn.click()
    print('\nClick on sign up button...')

    WebDriverWait(self.driver, WAITTIME).until(
      EC.presence_of_element_located((By.CLASS_NAME, 'login-container'))
    )
    print('Passed: User created.')

    time.sleep(SHOWTIME)
    self.driver.quit()

if __name__ == '__main__':
    unittest.main(verbosity=2)