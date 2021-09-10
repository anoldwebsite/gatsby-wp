/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 * Every Gatsby Node API gets passed a set of helper functions. 
 * These let you access several methods like reporting, or perform actions like creating new pages.
 */
const path = require('path');

//Implementing an API called createPages below.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const archiveTemplate = path.resolve('./src/templates/archive.js');

  const result = await graphql(`
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
      allWpCategory {
        edges {
          node {
            id
            name
            uri
            count
            slug
          }
        }
      }
    }
  `)

  result.errors ? reporter.panicOnBuild(`Something went wrong!`, result.errors) : console.log(result);

  const { allWpCategory, wp } = result.data;
  
  //Create page for each category. 
  allWpCategory.edges.forEach(category => {
    const postsPerPage = wp.readingSettings.postsPerPage;//How many posts are on one page?
    const numberOfPosts = category.node.count;//Number of posts within this category
    const numPagesForThisCategory = Math.ceil(numberOfPosts/postsPerPage);//How many pages do we need for this category?
    //Don't create pages for uncategorized posts. 
    //Some categories may be empty. Don't create pages for empty categories.
    if(numberOfPosts > 0 || category.node.name !== "uncategorized"){//OR or AND ??? In video minute 4:40:24 seconds
      Array.from({ length: numPagesForThisCategory }).forEach((_, i) => {//Array.from({length: numPagesForThisCategory}) will create an array with length equal to numPagesForThisCategory and set each element to undefined. We don't need the elements, so we use undersoncre in the next line but we use the index i.
        createPage({
          path: i === 0 ? category.node.uri : `${category.node.uri}${i + 1}`, //Don't add page number to the first page of posts and start the second page with number 1.
          component: archiveTemplate, //The context object in the next line will be used by the component archiveTemplate in src/templates/module archive.js
          context: {
            //Parameters that we want to send to our page template
            limit: postsPerPage, //In this case 10 i.e., 10 posts per page
            skip: i * postsPerPage, //In ith pass of the forEach loop skip (i * postsPerPage) number of pages.
            numPages: numPagesForThisCategory,
            currentPage: i + 1,//Zero bases arrays, therefore adding 1
            catId: category.node.id,
            catName: category.node.name,
            catUri: category.node.uri,
            categories: allWpCategory,
          },
        })
      })
    }
  });
};
