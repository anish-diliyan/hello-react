NPM: It is everything but not Node package manager. behind the scene it manage node package but it is not a abiriviation of Node package manager.

package.json is a configuration file for npm. it consists what is all dependencies for your project, what version is needed for dependency it will manage all the things.

bundler: it will bundle or package your code so that is can be pushed to production properly. ex: webpack, vite, parcel e.t.c.

To install any dependency in your app: npm install -flag dependency_name 

Types of dependency:
1. dev dependency: it is required in development phase. flag will be used -d
2. normal dependency: it will be used in production also.

Bundler Parcel: npm install parcel --save-dev

caret in package.json(^): it will update the minor version automatically.
tilde in package.json(~): it will update the major version automatically. 

package-lock.json: package.json keeps a aprox version if you are using ^ or ~ with version but package-lock.json has a exact version.

node_modules: it a database folder for all the dependencies, it contains actual data that we have configured in package.json. it consists all the codes for all the depndencies that you will be using in your code.

transit depndency: our project has parcel as dependency but parcel could have other dependencies that is called transit dependecy.

npx parcel index.html: just like we have npm, similarly we have npx, npx means executing a package. so this command will execute parcel. we will be using this to start server.

npm install react-dom@18.2.0: install dependency with version with ^ symbol.

err: @parcel/transformer-js: Browser scripts cannot have imports or exports.
   <script src = "./App.js"> </script>  we need to update this line like following
   <script type = "module" src = "./App.js"> </script>

transpilled: when you write a Jsx code then first before going to browser it will be converted in javascript by parcel using babel.

Babel: Jsx ---> React Js ---> JavaScript

Attributes in Jsx: If you are writting Attribute in JSx you need to use camel case.

multiple line Jsx: if you are writitng Jsx in multiple line you will have to write in (Jsx Syntax).