/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */

module.exports = (sequelize, DataTypes) => {
  const SheetMusic = sequelize.define(
    'SheetMusic',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'sheet_music_id',
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'title',
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'description',
      },
      isbn: {
        type: DataTypes.STRING(20),
        allowNull: true,
        field: 'isbn',
      },
      voices: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'voices',
      },
      duration: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'duration',
      },
      difficulty: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'difficulty',
      },
      style: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'style',
      },
      publisher: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'publisher',
      },
      publicationDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'publication_date',
      },
      quantityOnHand: {
        type: DataTypes.INTEGER(6),
        allowNull: true,
        field: 'quantity_on_hand',
      },
      purchasePrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
        field: 'purchase_price',
      },
    },
    {
      tableName: 'sheet_music',
      underscored: true,
      freezeTableName: true,
      scopes: {
        library: {
          include: [
            {
              model: sequelize.models.Accompaniment,
              as: 'accompaniments',
              attributes: ['name'],
              through: {
                attributes: [],
              },
            },
            {
              model: sequelize.models.Arranger,
              as: 'arrangers',
              attributes: ['name'],
              through: {
                attributes: [],
              },
            },
            {
              model: sequelize.models.Composer,
              as: 'composers',
              attributes: ['name'],
              through: {
                attributes: [],
              },
            },
            {
              model: sequelize.models.Editor,
              as: 'editors',
              attributes: ['name'],
              through: {
                attributes: [],
              },
            },
            {
              model: sequelize.models.Genre,
              as: 'genres',
              attributes: ['name'],
              through: {
                attributes: [],
              },
            },
            {
              model: sequelize.models.Language,
              as: 'languages',
              attributes: ['language'],
              through: {
                attributes: [],
              },
            },
            {
              model: sequelize.models.Lyricist,
              as: 'lyricists',
              attributes: ['name'],
              through: {
                attributes: [],
              },
            },
            {
              model: sequelize.models.Occasion,
              as: 'occasions',
              attributes: ['name'],
              through: {
                attributes: [],
              },
            },
            {
              model: sequelize.models.Performance,
              as: 'performed',
              attributes: ['name', 'startDate'],
              through: {
                attributes: [],
              },
            },
          ],
        },
      },
    }
  );

  SheetMusic.associate = function(models) {
    // associations can be defined here
    SheetMusic.belongsToMany(models.Accompaniment, {
      through: 'sheet_music_accompaniments',
      foreignKey: 'sheet_music_id',
      as: 'accompaniments',
    });
    SheetMusic.belongsToMany(models.Arranger, {
      through: 'sheet_music_arrangers',
      foreignKey: 'sheet_music_id',
      as: 'arrangers',
    });
    SheetMusic.belongsToMany(models.Composer, {
      through: 'sheet_music_composers',
      foreignKey: 'sheet_music_id',
      as: 'composers',
    });
    SheetMusic.belongsToMany(models.Editor, {
      through: 'sheet_music_editors',
      foreignKey: 'sheet_music_id',
      as: 'editors',
    });
    SheetMusic.belongsToMany(models.Genre, {
      through: 'sheet_music_genres',
      foreignKey: 'sheet_music_id',
      as: 'genres',
    });
    SheetMusic.belongsToMany(models.Language, {
      through: 'sheet_music_languages',
      foreignKey: 'sheet_music_id',
      as: 'languages',
    });
    SheetMusic.belongsToMany(models.Lyricist, {
      through: 'sheet_music_lyricists',
      foreignKey: 'sheet_music_id',
      as: 'lyricists',
    });
    SheetMusic.belongsToMany(models.Occasion, {
      through: 'sheet_music_occasions',
      foreignKey: 'sheet_music_id',
      as: 'occasions',
    });
    SheetMusic.belongsToMany(models.Performance, {
      through: 'music_performed',
      foreignKey: 'sheet_music_id',
      as: 'performed',
    });
    SheetMusic.belongsToMany(models.AssignedMusic, {
      through: 'music_assignments',
      foreignKey: 'sheet_music_id',
    });
  };

  return SheetMusic;
};
