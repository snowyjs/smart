module.exports = (config) => {
    return {
        token: config.token,
        prefix: config.prefix,
        status: config.status,
        statusType: config.statusType !== undefined ? config.statusType.toUpperCase() : "WATCHING",
        embedColor: config.embedColor
    };
}