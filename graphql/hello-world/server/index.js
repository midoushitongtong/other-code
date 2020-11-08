const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const graphql = require('graphql');

// 假的数据库
const fakeDatabase = {
  users: [
    {
      id: '1',
      name: '小李',
    },
  ],
};

// 定义查询数据的类型
const userType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: graphql.GraphQLString,
    },
    name: {
      type: graphql.GraphQLString,
    },
  },
});

const articleType = new graphql.GraphQLObjectType({
  name: 'Article',
  fields: {
    id: {
      type: graphql.GraphQLString,
    },
    content: {
      type: graphql.GraphQLString,
    },
    author: {
      type: userType,
    },
    category: {
      type: graphql.GraphQLString,
      args: {
        id: {
          type: graphql.GraphQLString,
        },
      },
    },
  },
});

// 定义查询数据处理器
const queryRootType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    hello: {
      type: graphql.GraphQLString,
      resolve: () => {
        return 'hello';
      },
    },
    users: {
      type: new graphql.GraphQLList(userType),
      resolve: () => {
        return fakeDatabase.users;
      },
    },
    article: {
      type: articleType,
      args: {
        id: {
          type: graphql.GraphQLString,
        },
      },
      resolve: (_, { id }) => {
        return {
          id,
          content: '文章内容文章内容文章内容文章内容文章内容',
          author: fakeDatabase.users[0],
          category: ({ id }) => {
            switch (id) {
              case '1':
                return '文章分类1';
              default:
                return null;
            }
          },
        };
      },
    },
  },
});

// 定义操作数据的类型
const InputCreateUserType = new graphql.GraphQLInputObjectType({
  name: 'InputCreateUserType',
  fields: {
    name: {
      type: graphql.GraphQLString,
    },
  },
});

const InputUpdateUserType = new graphql.GraphQLInputObjectType({
  name: 'InputUpdateUserType',
  fields: {
    id: {
      type: graphql.GraphQLString,
    },
    name: {
      type: graphql.GraphQLString,
    },
  },
});

// 定义操作数据处理器
const mutationRootType = new graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: {
      type: userType,
      args: {
        input: {
          type: InputCreateUserType,
        },
      },
      resolve: (_, { input: { name } }) => {
        const id = fakeDatabase.users.length + 1;

        // 保存数据
        fakeDatabase.users.push({
          id,
          name,
        });

        return fakeDatabase.users.find((item) => item.id === id);
      },
    },
    updateUser: {
      type: userType,
      args: {
        input: {
          type: InputUpdateUserType,
        },
      },
      resolve: (_, { input: { id, name } }) => {
        const user = fakeDatabase.users.find((item) => item.id === id);

        if (user) {
          // 保存数据
          Object.assign(user, {
            name,
          });
        }

        return fakeDatabase.users.find((item) => item.id === id);
      },
    },
  },
});

// 定义查询入口
const schema = new graphql.GraphQLSchema({
  query: queryRootType,
  mutation: mutationRootType,
});

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    // 开启 graphql 调试界面
    graphiql: true,
  })
);
app.use('/', express.static('public'));
app.listen(5000);
console.log('running 127.0.0.1:5000');
