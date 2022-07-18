var numbers0_9 = ['','one','two','three','four','five','six','seven','eight','nine'];
var numbers10_19 = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
var dozens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

module.exports = function toReadable (number) {

  var n = number.toString();

  var step1 = function (number) {
    return numbers0_9[number];
  };

  var step2 = function (number) {
    let nn = number.toString();
    if (number <= 9){
      return step1(number);
    } else if (number >= 10 && number <= 19){
        return numbers10_19[nn.substr(1, 1)];
    } else {
        return (dozens[nn.substr(0, 1)] + ' ' + step1(+nn.substr(1, 1)));
    }
  };

  var step3 = function (number) {
    let nn = number.toString();
    return (numbers0_9[n.substr(0, 1)] + ' hundred ' + step2(+nn.substr(1, 2)));
  };

  if (n.length === 1) {
    if (number === 0) {
      return ('zero');
    } else {
      return step1(number);
    };
  } else if (n.length === 2) {
    return step2(number).trim();
  } else if (n.length === 3) {
    return step3(number).trim();
  };

}

