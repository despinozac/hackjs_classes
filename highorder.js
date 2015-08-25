function x(f)
{
    return 	function()
			{
				for (var i = 0; i < arguments.length; i++)
				{
					if (f(arguments[i]))
            return true;
				}
        return false;
			};
}

function even(n)
{
  return !(n % 2);
}

var mystery = x(even);
console.log(mystery(3, 5, 7));
