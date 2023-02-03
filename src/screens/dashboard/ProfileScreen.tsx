import {useContext, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, ScrollView} from 'react-native';

import {UserContext} from '../../context/UserContext';
import {getUser, updateUser, upload} from '../../api/api';
import Loading from '../../utils/Loading';
import {UserShape} from '../../utils/globalTypes';
import {H1, H2, H3, P} from './styled.ProfileScreen';
import {Image} from 'react-native';

interface IScoresState {
  deckAvg: number | string;
  cardAvg: number | string;
}

// TODOS: handle profile picture

const ProfileScreen = () => {
  const {user, setUser} = useContext(UserContext);
  const [userData, setUserData] = useState<UserShape>();
  const [profilePicture, setProfilePicture] = useState('');
  const [newProfilePicture, setNewProfilePicture] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [scores, setScores] = useState<IScoresState>({} as IScoresState);

  const scoreCalculator = (userDataFromApi: UserShape) => {
    let scores: IScoresState = {} as IScoresState;
    if (userDataFromApi.decks && userDataFromApi.cards) {
      let deckHiScores = userDataFromApi.decks
        .map(deck => deck.highScore)
        .reduce((pv, cv) => pv + cv);
      let cardHiScores = userDataFromApi.cards
        .map(card => card.averageScore)
        .reduce((pv, cv) => pv + cv);
      deckHiScores / userDataFromApi.decks.length > 1
        ? (scores.deckAvg = Math.round(
            deckHiScores / userDataFromApi.decks.length,
          ))
        : (scores.deckAvg = (
            deckHiScores / userDataFromApi.decks.length
          ).toFixed(2));
      cardHiScores / userDataFromApi.cards.length > 1
        ? (scores.cardAvg = Math.round(
            cardHiScores / userDataFromApi.cards.length,
          ))
        : (scores.cardAvg = (
            cardHiScores / userDataFromApi.cards.length
          ).toFixed(2));
      setScores(scores);
    }
  };

  const handleUpdateDataForm = async () => {
    const updatedUser = {...userData};
    const updatedUserContext = {...user};
    // if (newProfilePicture) {
    //   const profPic = new FormData();
    //   profPic.append("file", newProfilePicture);
    //   const response = await upload(profPic);
    //   // Just wanted to try this below. Neat!
    //   [updatedUser.profilePicture, updatedUserContext.profilePicture] = Array(
    //     2
    //   ).fill(response.data.fileUrl);
    // }
    if (email) {
      updatedUser.email = email;
    }
    if (password) {
      updatedUser.password = password;
    }
    const updateResponse = await updateUser(updatedUser);
    setProfilePicture(updateResponse.data.profilePicture);
    setUser(updatedUserContext);
    // toast.success("Successfully updated your user data!");
    console.log('successfully updated data!');
  };

  useEffect(() => {
    (async () => {
      if (user?._id) {
        const response = await getUser(user._id);
        setUserData(response.data);
        setEmail(response.data.email);
      }
    })();
  }, [user]);

  useEffect(() => {
    (async () => {
      if (userData?.profilePicture) setProfilePicture(userData.profilePicture);
      if (
        userData?.decks &&
        userData?.cards &&
        userData?.decks?.length > 0 &&
        userData?.cards?.length > 0
      )
        scoreCalculator(userData);
    })();
  }, [userData]);

  if (!userData) return <Loading />;

  return (
    <SafeAreaView>
      <ScrollView>
        <H1>Your profile info </H1>
        <H3>Hi {userData.username}!</H3>

        {/* <Image
            source={{uri: userData.profilePicture}}
            style={{height: 100, width: 100}}
          /> */}
        <P>Total decks played: {userData.decks?.length}</P>
        <P>Average deck score: {scores.deckAvg || 0}</P>
        <P>Total cards seen: {userData.cards?.length}</P>
        <P>Average deck score: {scores.cardAvg || 0}</P>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
