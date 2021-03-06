const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const generateId = require('../helpers/generate-id');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const samples = sequelizeClient.define('samples', {
    id: {
      type: DataTypes.STRING,
      defaultValue: generateId,
      primaryKey: true
    },

    // properties
    caption: {
      type: DataTypes.TEXT
    },
    fileUrl: {
      type: DataTypes.STRING,
    },
    exifData: {
      type: DataTypes.JSON,
    },

    // relations
    trapId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    blobId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ownerId: {
      type: DataTypes.STRING
    },

    // analysis data
    status: {
      type: DataTypes.STRING,
      defaultValue: 'unprocessed'
    },
    jobId: {
      type: DataTypes.STRING
    },
    processed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    error: {
      type: DataTypes.JSON
    },
    analysisStartedAt: {
      type: DataTypes.DATE
    },
    analysisFinishedAt: {
      type: DataTypes.DATE
    },


    processedAt: {
      type: DataTypes.DATE
    },

    eggCount: {
      type: DataTypes.INTEGER
    },

    // timestamps (no updates)
    collectedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    });

  samples.associate = function (models) { // eslint-disable-line no-unused-vars
    samples.belongsTo(models.traps)
  };

  return samples;
};
