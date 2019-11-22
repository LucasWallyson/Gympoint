module.exports = {
  dialect: 'postgres',
  database: 'Exercise',
  username: 'postgres',
  password: 'docker',
  host: 'localhost',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
