module.exports = {
    meta: {
        type: 'problem'
    },
    rules: {
        'logger-warning-not-a-function': context =>
            ({ MemberExpression: function(node) {
                if (node.object.name === 'logger' && node.property.name === 'warning') {
                    context.report(
                        node,
                        'logger.warning is not a function. Change to logger.warn.'
                    );
                }}
             })
    }
};
