
exports.seed = function(knex, Promise) {
  return knex('student').del()
    .then(() => {
      return knex('student').insert([
        {id: 1, first-name: 'Will', last-name: 'Kirkhope', prev-occupation: 'Personal Trainer', hometown: 'San Diego'},
        {id: 2, first-name: 'Tom', last-name: 'Clukies', prev-occupation: 'Server', hometown: 'Denver'},
        {id: 3, first-name: 'Josh', last-name: 'Lovely', prev-occupation: 'Fortune Teller', hometown: 'Imaginationland'},
        {id: 4, first-name: 'Will', last-name: 'Kirkhope', prev-occupation: 'Personal Trainer', hometown: 'San Diego'},
        {id: 5, first-name: 'Tom', last-name: 'Clukies', prev-occupation: 'Server', hometown: 'Denver'},
        {id: 6, first-name: 'Josh', last-name: 'Lovely', prev-occupation: 'Fortune Teller', hometown: 'Imaginationland'},
        {id: 7, first-name: 'R.J.', last-name: 'Kirkhope', prev-occupation: 'Stuntman', hometown: 'San Diego'},
        {id: 8, first-name: 'Mark', last-name: 'Newcomb', prev-occupation: 'Already was a web developer yo', hometown: 'Hays'},
        {id: 9, first-name: 'Kim', last-name: 'Hermosillo', prev-occupation: 'Server', hometown: 'Denver'},
        {id: 10, first-name: 'Tom', last-name: 'Lee', prev-occupation: 'Sales Manager', hometown: 'Colorado Springs'},
        {id: 11, first-name: 'Ben',  last-name: 'Austin', prev-occupation: 'Social Work', hometown: 'Denver'},
        {id: 12, first-name: 'Josh', last-name: 'Robbs', prev-occupation: 'professional alligator wrangler', hometown: 'Poquoson'},
        {id: 13, first-name: 'Matt', last-name: 'Riach', prev-occupation: 'Map Seller', hometown: 'Liverpool'},
        {id: 14, first-name: 'Natalie', last-name: 'Todd', prev-occupation: 'Recruiter', hometown: 'Anchorage'},
        {id: 15, first-name: 'Michael', last-name: 'Coons', prev-occupation: 'Director of IT', hometown: 'Bloomington'},
        {id: 16, first-name: 'Danny', last-name: 'Pifer', prev-occupation: 'QA Tester', hometown: 'San Francisco'},
        {id: 17, first-name: 'Ryan', last-name: 'McCrory', prev-occupation: 'U.S. Army', hometown: 'Denver'}
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE resolution_id_seq RESTART WITH 4;");
  });
};
