package com.hmtmcse;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by Touhid on 20/01/2016.
 */
public class SampleFeature {

    @Given("^sample feature file is ready$")
    public void givenStatement(){
        System.out.println("Given statement executed successfully");
    }

    @When("^I run the feature file$")
    public void whenStatement(){
        System.out.println("When statement execueted successfully");
    }


    @Then("^run should be successful$")
    public void thenStatement(){
        System.out.println("Then statement executed successfully");
    }


}
