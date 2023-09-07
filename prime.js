function Prime(number) {
    let st = 2;
    const x = Math.sqrt(number);
    while (st <= x ) {
      if (number % st++ < 1) 
      return false;
    }
    return number > 1;
  }

  console.log(isPrime(11)); 
  