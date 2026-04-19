const fs = require('fs');
const path = require('path');

describe('Deployment and Styling Checks', () => {
  test('should have GitHub Actions workflow for deployment', () => {
    const workflowPath = path.join(__dirname, '..', '.github', 'workflows', 'main.yml');
    expect(fs.existsSync(workflowPath)).toBe(true);
  });

  test('should use vanilla CSS', () => {
    const cssPath = path.join(__dirname, '..', 'style.css');
    expect(fs.existsSync(cssPath)).toBe(true);
  });
});