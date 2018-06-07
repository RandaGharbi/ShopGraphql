import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields:{
    _id: {type: GraphQLString},
    id: {type: GraphQLInt},
    name: {type: GraphQLString},
    Description: {type: GraphQLString},
  }
});

const CategoryInputType = new GraphQLInputObjectType({
  name: 'CategoryInput',
  fields:{
    _id: {type: GraphQLString},
    id: {type: GraphQLInt},
    name: {type: GraphQLString},
    Description: {type: GraphQLString},
  }
});

const CategoriesType = new GraphQLObjectType({
  name: 'Categories',
  fields: {
    Categories: { type: new GraphQLList(CategoryType) }
  }
});

export {
  CategoryType,
  CategoryInputType,
  CategoriesType,
};