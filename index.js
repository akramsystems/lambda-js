const add = ({num1, num2}) => {
    return num1 + num2
}

const main = event => {
    console.log("Event: ", event)
    return event
};

exports.handler = main;