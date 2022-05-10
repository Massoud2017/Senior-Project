# Test File 04: Reset password for an account

import unittest
import time
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class ResetPasswordTest(unittest.TestCase):
  def test_reset_password(self):
    PATH = '/Users/ducnguyen/Programs/chromedriver'
    WEBPAGE = 'https://626883441640c715162ae8f9--thriving-creponne-382db8.netlify.app'
    WAITTIME = 5  #-- in seconds
    SHOWTIME = 2  #-- in seconds

    firstname = 'Johnny'
    lastname = 'Doe'
    firstcar = 'Pontiac'
    townname = 'Lalaland'
    email = 'johnnydoe@email.com'
    newpass = 'johnnyHASapass.456'

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

    #-- Select reset password option
    time.sleep(SHOWTIME)
    print('\nGo to Forgot Password page by clicking on Reset password link...')
    resetlink = self.driver.find_element(by=By.XPATH, value='//a[@href="/forgotpassword"]')
    resetlink.click()
    WebDriverWait(self.driver, WAITTIME).until(
      EC.presence_of_element_located((By.CLASS_NAME, 'forgotPassword'))
    )
    print('Passed: The Forgot Password Page is presented.')

    #-- Fill in Account Verification form
    time.sleep(SHOWTIME)
    print('\nFill in Account Verification form...')
    femail = self.driver.find_element(by=By.XPATH, value='//input[@name="username"]')
    femail.send_keys(email)
    print('\tUsername: ' + email)
    ffirstname = self.driver.find_element(by=By.XPATH, value='//input[@name="name"]')
    ffirstname.send_keys(firstname)
    print('\tFirst Name: ' + firstname)
    flastname = self.driver.find_element(by=By.XPATH, value='//input[@name="last_name"]')
    flastname.send_keys(lastname)
    print('\tLast Name: ' + lastname)
    time.sleep(SHOWTIME)
    verify_btn = self.driver.find_element(by=By.XPATH, value='//button[@type="submit"]')
    verify_btn.click()
    print('\nClick on Verify button...')
    WebDriverWait(self.driver, WAITTIME).until(
      EC.presence_of_element_located((By.CLASS_NAME, 'formContainerPassword'))
    )
    print('Passed: The Password Reset Page is presented.')

    #-- Fill in Password Reset form
    time.sleep(SHOWTIME)
    print('\nFill in Password Reset form...')
    fquestion1 = self.driver.find_element(by=By.XPATH, value='//input[@name="security_question_1"]')
    fquestion1.send_keys(firstcar)
    print('\tQuestion 1: ' + firstcar)
    fquestion2 = self.driver.find_element(by=By.XPATH, value='//input[@name="security_question_2"]')
    fquestion2.send_keys(townname)
    print('\tQuestion 2: ' + townname)
    fnewpass = self.driver.find_element(by=By.XPATH, value='//input[@name="password"]')
    fnewpass.send_keys(newpass)
    print('\tNew Password: ' + newpass)
    fconfirmnewpass = self.driver.find_element(by=By.XPATH, value='//input[@name="passwordConfirmation"]')
    fconfirmnewpass.send_keys(newpass)
    print('\tConfirm New Password: ' + newpass)
    time.sleep(SHOWTIME)
    resetpass_btn = self.driver.find_element(by=By.XPATH, value='//button[@type="submit"]')
    resetpass_btn.click()
    print('\nClick on Verify button...')
    print('\nCheck message from alert box...')
    alert = WebDriverWait(self.driver, WAITTIME).until(EC.alert_is_present())
    expected_msg = 'Your password has been changed.'
    self.assertTrue(expected_msg in alert.text)
    print('Alert Msg: ' + alert.text)
    print('Passed: Password has been changed.')
    alert.accept()
    
    #-- Login using new password
    time.sleep(SHOWTIME)
    print('\nLogging in using new password...')
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
    fpassword.send_keys(newpass)
    print('\tPassword: ' + newpass)
    time.sleep(SHOWTIME)
    signin_btn = self.driver.find_element(by=By.CLASS_NAME, value='form-login-btn')
    signin_btn.click()
    print('\nClick on sign in button...')

    print('\nGo to profile page...')
    WebDriverWait(self.driver, WAITTIME).until(
      EC.presence_of_element_located((By.CLASS_NAME, 'prof-button'))
    )
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