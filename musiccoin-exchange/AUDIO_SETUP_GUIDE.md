# Background Audio Setup Guide

## 🎵 Adding Background Music to Your MusicCoin Exchange

Your background audio player is now set up! Here's how to customize it:

### 📁 **Step 1: Add Your Audio File**

1. **Choose your audio file** - MP3 format recommended
2. **Name it correctly** - Rename to `background-music.mp3`
3. **Place it here** - Copy to `/musiccoin-exchange/public/background-music.mp3`

### 🎨 **Features Included:**

✅ **Auto-play**: Music starts automatically when page loads  
✅ **Loop**: Audio continuously repeats  
✅ **Volume Control**: Adjustable volume slider (30% default)  
✅ **Play/Pause**: Toggle button in bottom-right corner  
✅ **Visual Feedback**: Shows when music is playing/paused  
✅ **Browser Compatible**: Handles autoplay restrictions gracefully  

### 🎼 **Recommended Audio Sources:**

- **Royalty-free music**: [Freesound.org](https://freesound.org)
- **Creative Commons**: [Free Music Archive](https://freemusicarchive.org)
- **YouTube Audio Library**: Free music for creators
- **Incompetech**: Kevin MacLeod's royalty-free music
- **Bensound**: Free royalty-free music

### 🎛️ **Customization Options:**

**Change default volume**: Edit line 9 in `BackgroundAudio.tsx`
```tsx
const [volume, setVolume] = useState(0.3); // Change 0.3 to your desired volume (0.0 to 1.0)
```

**Change audio file name**: Edit line 45 in `BackgroundAudio.tsx`
```tsx
src="/background-music.mp3" // Change to your filename
```

**Change position of controls**: Edit the positioning classes in the div around line 48
```tsx
<div className="fixed bottom-4 right-4 z-50..."> // Change bottom-4 right-4 to your preferred position
```

### 🚫 **Browser Autoplay Policy:**

Modern browsers may block autoplay with sound. The component handles this by:
- Showing play button if autoplay is blocked
- Allowing user to manually start the music
- Remembering user preferences

### 🎵 **Current Setup:**
- Audio player component: `/src/components/BackgroundAudio.tsx`
- Added to home page: `/src/app/page.tsx`
- Audio file location: `/public/background-music.mp3` (you need to add this)

### ▶️ **Testing:**
1. Add your MP3 file to the public folder
2. Restart your dev server: `npm run dev`
3. Visit `http://localhost:3001`
4. Look for the music controls in the bottom-right corner

The audio will enhance the music-themed experience of your MusicCoin Exchange! 🎊