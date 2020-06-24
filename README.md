# WordAnalyzer
non-native word analyzer. Added several variables so that analyzer can detect numbers, special characters and multiple words.

Step 1: Set up constructor with variables for character analysis.

Step 2: Make arrow function 'calculate'
  Step 2.1: let 'word' receives input from render()
  Step 2.2: make arr as word.split("") to remove spacing as part of the string.
  Step 2.3: let totalChar = arr.length to get input string lenght minus the spacing.
  Step 2.5: declare variables for counting vowels, consonants, numbers and special characters/symbols.
  Step 2.6: make a for loop with i<totalchar
   Step 2.6.1: make if else statements for each counting variables and they're characters.
  Step 2.7: return data to render() with fat arrow function (avoids value carrying over on next consecutive input).

Step 3: in render(), use TextInput to get use input.
  Step 3.1: have a button with onPress that sends input to arrow function 'calculate'
  Step 3.2: call the setState data in arrow function 'calculate'
