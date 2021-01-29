const atBash = (frase, fraseCrypt = "") => {
  const charset = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  const std = charset + charset.toLowerCase() + " ";
  const crypt =
    charset.split("").reverse().join("") +
    charset.split("").reverse().join("").toLowerCase() +
    " ";

  for (char of frase) {
    fraseCrypt += crypt[std.indexOf(char)];
  }
  return fraseCrypt;
};