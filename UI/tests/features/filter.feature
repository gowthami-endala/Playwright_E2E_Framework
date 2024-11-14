Feature: Filter testcases

  Scenario: Verifying Filter options
    Given User Clicks on the Filter
    When Verifying four  filter options
    Then Clicking outside should close the pop up

  Scenario: Verifying Filter sorted alphabetically A-Z
    Given User is on homePage
    When User selects a-z on the filter
    Then Filter options are sorted alphabetically A-Z on the results displayed

  Scenario: Verifying Filter sorted alphabeiically Z-A
    Given User is on homePage
    When User selects z-a on the filter
    Then Filter options are sorted alphabetically Z-A on the results displayed

  Scenario: Verifying Filter Option Price with sorted Low-High
    Given User is on homePage
    When User selects Price Low-High on the filter
    Then Filter options are sorted Price Low-High on the results displayed

  Scenario: Verifying Filter Option Price with sorted High-Low
    Given User is on homePage
    When User selects Price High-Low on the filter
    Then Filter options are sorted Price High-Low on the results displayed

  Scenario: Verify product details and cart functionality
    Given User is on the home page
    When User clicks on the first product
    Then User is navigated to the product details page
    And the product name is displayed
    And the product description is displayed
    And the product price is displayed
    When User clicks on Add to Cart
    Then the Add to Cart button changes to Remove
    And the cart shows one item
    When User clicks on Back to products
    Then User is navigated back to the product page where all products are listed
