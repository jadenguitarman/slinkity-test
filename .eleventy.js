module.exports = function(eleventyConfig) {
  // copies all scss files from your input directory (which is just the base of this project)
  // to the output for Vite to pick up
  eleventyConfig.addTemplateFormats('scss')
}