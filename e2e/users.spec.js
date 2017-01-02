var should = require('should');

describe('Create user', function() {
    beforeEach(function() {
        browser.get('/');
    });

    function createUser(name, lastName) {
        element(by.id('name-input')).sendKeys(name);
        element(by.id('lastName-input')).sendKeys(lastName);
        element(by.id('submit-btn')).click();
    }

    it('should display Hello protractor as a title', function() {
        return browser
            .getTitle()
            .then(function(title) {
                title.should.be.equal('Hello protractor');
            })
    });

    it('should show the success alert when creating an user when put the right parameters', function() {
        createUser('Esteban', 'Quito');
        return element(by.id('success-label'))
            .isDisplayed()
            .then(function(isDisplayed) {
                return isDisplayed.should.be.true();
            });
    });

    it('should show the success alert when creating an user when put the right parameters', function() {
        createUser('Esteban', 'Quito');
        return element(by.id('success-label'))
            .getText()
            .then(function(text) {
                text.should.be.equal('User created!');
            });
    });

    it('should not show the error alert when creating an user when put the right parameters', function() {
        createUser('Esteban', 'Quito');
        return element(by.id('error-label'))
            .isDisplayed()
            .then(function(isDisplayed) {
                return isDisplayed.should.be.false();
            });
    });

    it('should show the error alert when creating an user when put the wrong parameters', function() {
        createUser('Esteban', '123456789');
        return element(by.id('error-label'))
            .isDisplayed()
            .then(function(isDisplayed) {
                return isDisplayed.should.be.true();
            });
    });

    it('should show the success alert when creating an user when put the right parameters', function() {
        createUser('Esteban', '123456789');
        return element(by.id('error-label'))
            .getText()
            .then(function(text) {
                text.should.be.equal('User can\'t have numbers as last name!');
            })
    });

    it('should not show the error alert when creating an user when put the right parameters', function() {
        createUser('Esteban', '123456789');
        return element(by.id('success-label'))
            .isDisplayed()
            .then(function(isDisplayed) {
                return isDisplayed.should.be.false();
            });
    });
});
