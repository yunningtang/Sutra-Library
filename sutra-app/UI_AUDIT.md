# UI/UX 审计报告 — 经库 App（极简模式）

> 原则：佛经 App 的气质是安静、专注、克制。只修必要的，不加多余的。

---

## Critical

### 1. 长按查词是隐藏功能

阅读页长按 300ms 弹出词义弹窗，但没有任何提示。新用户 100% 不会发现。

**文件：** `src/pages/ReadingPage.tsx`  
**修复：** 首次进入阅读页显示一次 toast：「长按文字可查看释义」。store 加 `hasSeenLongPressHint: boolean`，只显示一次。

---

### 2. 工具栏消失无提示

下滑后工具栏隐藏，用户不知道怎么恢复，以为被困在页面里。

**文件：** `src/pages/ReadingPage.tsx`（scroll 逻辑），`ReadingPage.css`（`.reading-toolbar.hidden`）  
**修复：** 首次隐藏时显示一次 toast：「点击屏幕可显示工具栏」。store 加 `hasSeenToolbarHint: boolean`。

---

### 3. 两个按钮做同一件事

详情页「开始念诵」和「经文全文」都导向 `/read/{sutraId}`。

**文件：** `src/pages/SutraDetailPage.tsx:82-93`  
**修复：** 删掉「经文全文」，只留「开始念诵」。

---

### 4. 完成页太冷淡

完成诵读只显示「诵读圆满」+ 计数 + 一个「返回」按钮。修行者完成一遍诵读是有意义的时刻，不应该这么平淡。

**文件：** `src/pages/ReadingPage.tsx:167-179`，`ReadingPage.css`（`.completion-page`）  
**修复：**
- 加一句简短的语：「功德圆满」或「善哉善哉」（随机）
- 加「再诵一遍」按钮
- 加 `navigator.vibrate([50, 50, 100])` 触觉反馈

不要加分享、推荐下一部、打卡统计。

---

### 5. 长经文没有阅读位置记忆

地藏经 17,394 字，中途退出从头开始。

**文件：** `src/pages/ReadingPage.tsx`，`src/store/useStore.ts`  
**修复：** store 加 `readingPositions: Record<string, number>`，阅读时节流 2 秒保存 `scrollY`，下次打开恢复位置。

---

## Quick Fix

### 6. 暗黑模式 theme-color 不更新

切换暗色后手机浏览器顶栏仍是白色。

**文件：** `src/App.tsx`（ThemeProvider useEffect）  
**修复：**
```ts
const meta = document.querySelector('meta[name="theme-color"]')
if (meta) meta.setAttribute('content', darkMode ? '#1C1B1A' : '#FCFCFB')
```

---

### 7. 按钮伪元素定位 bug

`.start-reading-btn::after` 用了 `position: absolute` 但父元素没有 `position: relative`。

**文件：** `src/pages/SutraDetailPage.css:95-118`  
**修复：** `.start-reading-btn` 加 `position: relative`。

---

### 8. Tab 栏字号太小

10px 对年长用户不友好。

**文件：** `src/components/Layout.css`（`.tab-label`）  
**修复：** `font-size: 10px` → `font-size: 11px`。

---

### 9. 工具栏空白区域

`.toolbar-title` 是空的 flex spacer，可以显示当前经文名。

**文件：** `src/pages/ReadingPage.tsx:215`  
**修复：** `<div className="toolbar-title">{sutra.name}</div>`，字号 13px。
