import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ViewNotes from '../screens/ViewNotes';
import AddNote from '../screens/AddNote';

// https://reactnavigation.org/docs/getting-started/
// In a web browser, you can link to different pages using an anchor (<a>) tag.
// When the user clicks on a link, the URL is pushed to the browser history stack.
// When the user presses the back button, the browser pops the item from the top of the history stack,
// so the active page is now the previously visited page.
// React Native doesn't have a built-in idea of a global history stack like a web browser does
const StackNavigator = createStackNavigator(
  {
    ViewNotes: {
      screen: ViewNotes
    },
    AddNote: {
      screen: AddNote
    }
  },
  {
    initialRouteName: 'ViewNotes',
    headerMode: 'none',
    mode: 'modal',
  }
);

export default createAppContainer(StackNavigator);
