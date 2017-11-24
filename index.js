function produceDrivingRange(blockRange) {
  return function(start, end) {
    let distance = Math.abs(parseInt(start)-parseInt(end));
    if (distance > blockRange) {
      return `${distance-blockRange} blocks out of range`;
    }
    else {
      return `within range by ${blockRange-distance}`;
    }
  }
}

function produceTipCalculator(percent) {
  return function(total) {
    return total * percent;
  }
}

function createDriver () {
  let DriverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++DriverId;
    }
  }
}
