// 3a)
'My name is:';
// 3b)
'NAME';
// 3c)
'My name is' +'NAME';
// 3d)
'Total cost: $' + (5+3);
// 3e)
`Total cost: $ ${5+3}`;
// 3f)
alert(`Total cost: $ ${5+3}`);
// 3g)
'Total cost: $' + ((599 + 295)/100);
// 3h)
`Total cost: $ ${((599 + 295)/100)}`;
// 3i)
alert(`Total cost: $ ${((599 + 295)/100)}`);
// 3j)
alert(`Total cost: $ ${((599 + 295)/100)}\nThank you, come again!`);
// 3k)
`Items(${2+2}): $${(2*2095 + 2*799)/100}`;
// 3l)
`Shipping & handling: $${(499+499)/100}`;
// 3m)
`Total before tax: ${((2*2095 + 2*799)/100) + ((499+499)/100)}`;
// 3n)
`Estimate tax (${10}%): ${(( ((2*2095 + 2*799)/100) + ((499+499)/100) ) / 10).toFixed(2)}`;