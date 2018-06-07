import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields:{
    _id: {type: GraphQLString},
    id: {type: GraphQLInt},
    name: {type: GraphQLString},
    category_id: {type: GraphQLString},
  }
});

const ProductInputType = new GraphQLInputObjectType({
  name: 'ProductInput',
  fields:{
    _id: {type: GraphQLString},
    id: {type: GraphQLInt},
    name: {type: GraphQLString},
    category_id: {type: GraphQLString},
  }
});

const ProductsIds = new GraphQLInputObjectType({
  name: 'ProductsIds',
  fields:{
    category_id: {type: GraphQLString},
  }
});

const ProductsType = new GraphQLObjectType({
  name: 'Products',
  fields: {
    Products: { type: new GraphQLList(ProductType) }
  }
});

export {
  ProductType,
  ProductInputType,
  ProductsType,
  ProductsIds,
}