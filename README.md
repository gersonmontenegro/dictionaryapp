# dictionaryapp
App to use the translation service from the Oxford API dictionary using React Native

Now, I'm going to make a little experiment using the [Oxford dictionary API](https://developer.oxforddictionaries.com). It's free, at least in my purpose.

First of all, I need some scope in order to start this project, and the initial scope could have the next features:

 1. Splash screen.
 2. Main interface to search the meaning of a word.
 3. Show related words.
 4. Show different meanings.
 5. Show part of the speak.

I think is enough with that scope for now because I'm talking about a little project, but it's important for me to get a project that is able to scale with more options without struggling in the future with the base code.

So, like in my previous projects, I'll make some scratch in order to get a better idea about how the project would go next.

This time I'm going to use for the first time a tool called Sketch, because I've been listening a lot about this software. 

![enter image description here](https://lh3.googleusercontent.com/Lryiv5f8WG4wLF5VqvrKs1imaTgSKQddU_Sbd-gbwtAu9y03BQHaDdIfd5HFZKx687qDo_7tRjaC=s900)

With the previous interface I got my initial scope in order to start to define the activities in each of them, as I'll do next:

**Splash screen**

 - Install splash screen plugin
 - Create native splash. At this point, I think that it could be a good idea to publish the app, so, the Android version would be the main version to work with.

**Search screen**

 - Create container component.
 - Create search component.
 - Create Results bar component.
 - Create item component.
 - Create list container component. 
 - Connect with splash screen.
 - If the word hasn't results, the app will start to search related words.
 - List results.
 - Show how many results are.

**Word detail screen**

 - Read lexical categories from the result object.
 - List all lexical categories.
 - In every lexical category, list all the results and first sentence.
 - At the end of lexical categories, show phonetic pronunciation.

I think that's ok at least for the first prototype.
