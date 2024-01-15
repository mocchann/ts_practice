type User = {
  isAdult(): boolean;
};

function checkForAdultUser(user: user | null) {
  if (user?.isAdult()) {
    showSpecialContents(user);
  }
}
