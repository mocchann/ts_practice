type GetTimeFunc = () => Date;

function checkForAdultUser(getTimeFunc: GetTimeFunc | undefined) {
  const timeStringOrUndefined = getTimeFunc?.().toString();
}
