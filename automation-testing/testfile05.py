# Test File 05: Making an order

import unittest
import time
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class MakeOrderTest(unittest.TestCase):
  def test_make_order(self):
    PATH = '/Users/ducnguyen/Programs/chromedriver'
    WEBPAGE = 'https://626883441640c715162ae8f9--thriving-creponne-382db8.netlify.app'
    WAITTIME = 10  #-- in seconds
    SHOWTIME = 2   #-- in seconds

    testcardnum = 4242424242424242
    testexpdate = 1235
    testcvc = 123
    testpostal = 82754

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

    #-- Go to Menu page
    time.sleep(SHOWTIME)
    print('\nGo to Menu page by clicking on Menu button...')
    menu = self.driver.find_element(by=By.CLASS_NAME, value='menu-1')
    menu.click()
    WebDriverWait(self.driver, WAITTIME).until(
      EC.presence_of_element_located((By.CLASS_NAME, 'item-con'))
    )
    print('Passed: The Menu Page is presented.')

    #-- Add item to cart
    time.sleep(SHOWTIME)
    print('\nAdd some items to cart...')
    addbuttonlist = self.driver.find_elements(by=By.CSS_SELECTOR, value='.add-cart-btn')
    addbuttonlist[1].click()
    print('\tAdded Herb Roasted Quail to cart')
    time.sleep(SHOWTIME)
    cat = self.driver.find_element(by=By.XPATH, value='//div[contains(text(), "House Special Dessert")]')
    cat.click()
    print('\tGo to ' + cat.text + ' category')
    time.sleep(SHOWTIME)
    addbuttonlist = self.driver.find_elements(by=By.CSS_SELECTOR, value='.add-cart-btn')
    addbuttonlist[0].click()
    print('\tAdded Pandan Caramel Flan to cart')

    #-- Open cart and checkout
    time.sleep(SHOWTIME)
    cart = self.driver.find_element(by=By.CLASS_NAME, value='cart-btn-img')
    cart.click()
    time.sleep(SHOWTIME)
    checkoutbtn = self.driver.find_element(by=By.XPATH, value='//button[text()="CHECKOUT"]')
    checkoutbtn.click()
    print('\nOpen cart and click on CHECKOUT button...')
    WebDriverWait(self.driver, WAITTIME).until(
      EC.presence_of_element_located((By.CLASS_NAME, 'chekoutpopup'))
    )
    print('\t--> Checkout Popup present')
    time.sleep(SHOWTIME)
    payasguestbtn = self.driver.find_element(by=By.CLASS_NAME, value='payasguest-btn')
    payasguestbtn.click()
    print('\nSelect Pay As Guest option...')

    #-- Enter payment info and pay
    WebDriverWait(self.driver, WAITTIME).until(
      EC.presence_of_element_located((By.XPATH, '//iframe[contains(@name, "__privateStripeFrame")]'))
    )
    iframe = self.driver.find_element(by=By.XPATH, value='//iframe[contains(@name, "__privateStripeFrame")]')
    self.driver.switch_to.frame(iframe)
    print('\nEnter payment info...')
    cardnumber = self.driver.find_element(by=By.NAME, value='cardnumber')
    cardnumber.send_keys(testcardnum)
    print('\tCard number: ' + str(testcardnum))
    expdate = self.driver.find_element(by=By.NAME, value='exp-date')
    expdate.send_keys(testexpdate)
    print('\tExpired date: ' + str(testexpdate))
    cvc = self.driver.find_element(by=By.NAME, value='cvc')
    cvc.send_keys(testcvc)
    print('\tCVC: ' + str(testcvc))
    postal = self.driver.find_element(by=By.NAME, value='postal')
    postal.send_keys(testpostal)
    print('\tPostal code: ' + str(testpostal))
    time.sleep(SHOWTIME)
    self.driver.switch_to.default_content()
    paybtn = self.driver.find_element(by=By.XPATH, value='//button[text()="Pay"]')
    paybtn.click()
    print('\nClick on Pay button...')
    WebDriverWait(self.driver, WAITTIME).until(
      EC.presence_of_element_located((By.CLASS_NAME, 'save-your-receipt'))
    )
    print('Passed: Payment is completed successfully.')
    
    time.sleep(SHOWTIME)
    self.driver.quit()

if __name__ == '__main__':
    unittest.main(verbosity=2)