// let tags = tagOne.value;
// const getTag = async () => {
//   try {
//     let tagsRes = await axios.post("/api/tags", {
//       post_id: res.data.post.id,
//       tags,
//     });
//     // debugger;
//   } catch (err) {
//     console.log(err);
//   }
// };

var countServers = function (grid) {
  let rc = {};
  let cc = {};
  let sr = {};
  let sc = {};

  for (let i = 0; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        rc[i]++;
        cc[j]++;
      }
      if (rc[i] >= 2) {
          sr[i] = true
      }
      if (cc[j] >= 2) {
          sc[j] = true
      }
    }
}
return i
};

console.log(countServers())