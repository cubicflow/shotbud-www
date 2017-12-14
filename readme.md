---
layout: page
title: Writing Documentation
permalink: /readme/
sitemap: false
no_index: true
---


This document contains instructions for authoring, categorizing, and editing documentation articles, as well as a basic overview of the plugins and special features at your disposal.

{% callout info %}

### CloudCannon Documentation

This article assumes you are already familiar with the CloudCannon authoring experience & interface. For more information read the [Official Cloudcannon Documentation](https://docs.cloudcannon.com/).

{% endcallout %}

## Categories

Managed through the `categories` collection, a category must be present in this collection in order to be assigned to an article. Categories with no articles assigned will not be displayed on the sidebar.

### Front Matter

**Title** - The title of the category.

**Order** - A number that determines the order of the categories when displayed in the sidebar. Lower numbers are listed first

**Color** - A Hex code with a unique color for the category. Make sure it is a color with sufficient contrast when displayed on a white background.

**Subcategories** - A list of strings with the name of each possible subcategory. Subcategories will not be displayed in the main navigation if they dont have articles attached to them, and are displayed in the order that they are defined.

## Tags

Managed through the `tags` collection, a tag must be present in this collection in order to be assigned to an article. Tags are very simple entities with only one managed field.

### Front Matter

**Title** - The title of the category.

## Documentation Articles

The main documentation articles are managed inside of the `docs` collection.

### Subfolders

The docs collection contains subfolders for organizing articles.

Initially the intention is to have a folder for each main category in the site, but if the number of articles in a folder becomes unmanageable it should be broken up into folders for subcategories as well.

{% callout warning %} When moving or recategorizing articles pay attention to keeping the location of the articles in sync with the categories they have assigned. {% endcallout %}

### Entry Article

Each category should contain one **Entry Article**. This is the first article that is opened when a user navigates to a category. This article is the same as others in the category, except for two important differences:

* The articles `permalink` set to the slug of the category.
* The `order` property of the article and its siblings should be set so the entry article is the first listed.

### Front Matter

**Title** - The title of the article. Used in page `<title>` tags

**Description** - A short summary of the article. While it isnt displayed visually on the page, it is used for various `<meta>` tags.

**Category** - Choose a category from a list of existing categories. Articles with no category assigned will not be listed in the navigation & only be accessible via a direct link.

**Subcategory** - Either leave empty for no subcategory, or input a string that **must exactly match** one of the subcategories defined on the chosen `category` above. If a subcategory is entered, but doesnt match one of the defined subcategories, it will not be listed in the navigation & only be accessible via a direct link.

**Permalink** - Only use this field for the *entry article* for each category. Assign the permalink to be the slug of the category that this is the entry article

**Tags** - One or more tags that are applicable to the article.

**Last Updated Date** - The date the article was authored, or the last date the article had a significant change.

**Next Steps** - A list of links that will appear after the article. Intended to hold links to other related articles.

**Related Discussion** - A list of links to related discourse discussion threads.

## Writing

Writing the actual meat of the articles is relatively simple, you have all the formating options of markdown and/or the CloudCannon editor at your disposal.

### Images

Images are displayed centered and at their max width unless it exceeds that of the container, in which case the images will scale to the size of the container.

{% callout info %}
The max-width of the article container is **960px**. We reccomend that you dont make your images any larger then that.
{% endcallout %}

#### Example with small image

![](https://avatars2.githubusercontent.com/u/19439282?s=200&v=4)

#### Example with full-width image:

![](http://cubicflow.com/assets/img/snapshots/fullsize/panoply-docs.jpg)


### Headings

Dont use `h1` inside the body of your articles or lead your article with a heading. The page template inserts the article title in an `h1` at the beginning of the page so you dont need to.

### Callouts

Support for various styled callouts is provided by a plugin. You can use the callout liquid tag without switching to the code editor as the visual editor doesnt escape the `{% raw %}{%  %}{% endraw %}` characters.

Here is an example with the default callout style:
{% highlight liquid %}
{% raw %}
{% callout %}

### This is a heading inside a callout

This is text inside a callout for your viewing pleasure

{% endcallout %}
{% endraw %}
{% endhighlight %}
{% callout %}

### This is a heading inside a callout

This is text inside a callout for your viewing pleasure

{% endcallout %}

---

For different colors of callout pass the name of the style you would like to use to the callout like this:
{% highlight liquid %}
{% raw %}
{% callout danger %}
...
{% endcallout %}
{% endraw %}
{% endhighlight %}
{% callout danger %}

### This is a heading inside a callout

This is text inside a callout for your viewing pleasure

{% endcallout %}

---

The supported callout styles are `info`, `success`, `warning`, and `danger`.

{% callout info %}

This is the **info** callout style

{% endcallout %}

{% callout success %}

This is the **success** callout style

{% endcallout %}

{% callout warning %}

This is the **warning** callout style

{% endcallout %}

{% callout danger %}

This is the **danger** callout style

{% endcallout %}


## Code Highlighting

Get code syntax highlighting by using the highlight tag and passing in the name of the language to highlight

{% highlight liquid %}
{% raw %}
{% highlight jsx %}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Frame/>
      </div>
    );
  }
}
{% endhighlight %}
{% endraw %}
{% endhighlight %}

Transforms into:

{% highlight jsx %}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Frame/>
      </div>
    );
  }
}
{% endhighlight %}

---

{% callout danger %}

### Renaming Entities

Although it is entirely possible to rename entities such as categories or tags through CloudCannon, once there is a lot of content it can be tricky to make sure every instance is renamed correctly.

We reccomend using a text editor that makes find-and-replace operations simple when renaming categories or tags that get used in many places.

{% endcallout %}