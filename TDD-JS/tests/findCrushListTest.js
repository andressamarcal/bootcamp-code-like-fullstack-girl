const should = require('should')


//describe irá descrever o escopo do teste
describe('find crushs', () => {
    
    //bloco de teste
    it('soma crushs', () => {
        findCrushs.somaCrush(2,3).should.be.equal(5)
    })

});