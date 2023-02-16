class TargetFlightsPage{

SMCFlightLink= "[data-testid='navDropDownButton'] > span"
TargetFlightPage = "#testDropDownOne > :nth-child(1) > .usa-nav__link"

click_on_SMCFlights_Link(){

    return cy.get('[data-testid="navDropDownButton"] > span')
   //return cy.get(this.SMCFlightBtn)

    }
click_on_TargetFlights_Link(){

    return cy.get('#testDropDownOne > :nth-child(1) > .usa-nav__link')
   //return cy.get(TargetFlightPage)
    }    
click_on_SMCNumber_Link(){

    return cy.contains('SMC #')
}
click_on_Categories_Link(){

    return cy.contains('Categories')
}
click_on_FlightNumber_Link(){

    return cy.contains('Flight #')
}
click_on_Airport_Link(){

    return cy.contains('Airport')
}
click_on_DepartDate_Link(){

    return cy.contains('Depart Date')
}
click_on_DepartTime_Link(){

    return  cy.contains('Depart Time')
}
click_on_Status_Link(){

    return cy.contains('Status')
}

click_on_Options_Link(){

    return cy.contains('Options')
}

}

export default TargetFlightsPage;