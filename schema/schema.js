const graphql = require("graphql");
const { model } = require("mongoose");
const db = require("../models");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

// GraphQL Object -> Tables / Collections
const SlideType = new GraphQLObjectType({
  name: "Slide",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    img: {
      type: GraphQLString,
    },
    header: {
      type: GraphQLString,
    },
    shortDescription: {
      type: GraphQLString,
    },
  }),
});

// GraphQL Object -> Tables / Collections
const PackageListType = new GraphQLObjectType({
  name: "PackageList",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    img: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    type: {
      type: GraphQLString,
    },
    location: {
      type: GraphQLString,
    },
    features: {
      type: GraphQLString,
    },
    usd: {
      type: GraphQLString,
    },
  }),
});

// GraphQL Object -> Users Table / Collections
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
  }),
});

// User authentication
const UserAuthData = new GraphQLObjectType({
  name: "UserAuthData",
  fields: () => ({
    userId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    token: {
      type: new GraphQLNonNull(GraphQLString),
    },
    tokenExpiration: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  }),
});

// Graphql Root Query -> define different way you want to query the database
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    slides: {
      type: new GraphQLList(SlideType),
      resolve(parent, args) {
        return db.Slide.find({});
      },
    },
    packagelists: {
      type: new GraphQLList(PackageListType),
      resolve(parent, args) {
        return db.PackageList.find({});
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return db.User.find({});
      },
    },
    login: {
      type: UserAuthData,
      args: {
        email: {
          type: new GraphQLNonNull(GraphQLString),
        },
        password: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(parent, args) {
        const user = db.User.findOne({ email: args.email });
        if (!user) {
          throw new Erro();
        }
      },
    },
  },
});

//Defining the mutation
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addPackage: {
      type: PackageListType,
      args: {
        img: { type: GraphQLString },
        name: { type: GraphQLString },
        type: { type: GraphQLString },
        location: { type: GraphQLString },
        features: { type: GraphQLString },
        usd: { type: GraphQLInt },
      },

      //Creating a new instance to the db(momgoose knows how to do it)
      resolve(parent, args) {
        let package = new db.PackageList({
          img: args.img,
          name: args.name,
          type: args.type,
          location: args.location,
          features: args.features,
          usd: args.usd,
        });
        return package.save();
      },
    },
    addSlide: {
      type: SlideType,
      args: {
        img: {
          type: GraphQLString,
        },
        header: {
          type: GraphQLString,
        },
        shortDescription: {
          type: GraphQLString,
        },
      },

      //Creating a new instance to the db(momgoose knows how to do it)
      resolve(parent, args) {
        let slide = new db.Slide({
          img: args.img,
          header: args.header,
          shortDescription: args.shortDescription,
        });
        return slide.save();
      },
    },

    addUser: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },

      //Creating a new instance to the db(momgoose knows how to do it)
      resolve(parent, args) {
        let user = new db.User({
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          password: args.password,
        });
        return user.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery, // define which query user are allowed to use in the frontend
  mutation: Mutation, //as well as mutation
});
