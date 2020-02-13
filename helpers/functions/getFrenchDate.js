const getFrenchDate = () => {
    return new Date(new Date().valueOf() + 3600000);
};
module.exports = getFrenchDate;