module.exports = {
    '*.{ts, tsx}': ['yarn prettify', 'yarn typecheck', 'yarn lint --fix'],
};
