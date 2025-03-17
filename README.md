# PanPalzAssessment
A mock assessment for candidates with PanPalz's shortened repo.

# Code Guidelines

## Pull Requests
- Provide a clear description of changes.  
- Include a screenshot of the completed screen.  
- Avoid adding packages unless necessary; document any additions with reasons.  
- Ensure the screen Jest test and cases pass.  

## General Coding Tips
- Minimize unnecessary package usage.  
- Use reusable components; create new ones if beneficial for future screens.  
- Maintain responsiveness with `Dimensions.get('window')`.  
- Add parameters in `UserContext.tsx` (`/src/data`) for access and updates.  
- Focus on screen implementation; use `console.log()` for navigation placeholders.  
- Store static data (e.g., languages, countries, genders) in the `constants` folder.  
