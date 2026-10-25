---
title: Land Nav Developer Log
---

Every wonder what a dev goes through when building an app? Here is a raw dump of some of the notes I keep while building Land Nav.

I'm glad I didn't know how much effort it was going to take before I started because I would have been too afraid to start.

A lot of the work was caused by figuring out how it should work and learning state management in Swift UI. I think I rebuilt the app 3 times before finally understanding how to efficiently architect a large scale SwiftUI app and come up with a design that I was happy with.

Feb 5

- [x] Update website with What's New information.

Feb 2

- [x] Integrate What's New functionality

Feb 1, 2024

- [x] Finalize search feature
- [x] Finalize drawing regions and routes
- [x] Finalize ruler feature

Rest of 2023

Long break to see what the market would do for the app.  Unfortunately it didn't go viral and make me 10s of thousands (or even thousands).  The feedback I recived was positive so I think I'm the right track.

I worked on and off on the next major features for search, a ruler, and routes and regions.

May 22, 2023

- [x] 1.0.1 released and available on the app store
- [x] Tested in-app purchase on my device. It works, yay, at least I've made one sale!
- [x] Continued evaluating geocoding and geosearch APIs.

May 21

- [x] Approved by Apple and released on the App Store 🎉 and then taken off because I didn't submit the in-app purchase along with the app so the buy feature wouldn't work :(
- [x] Version 1.0.1 submitted
- [x] Worked on search feature using openrouteservice.org for now. I don't think I'll be able to ship with that service because rate limits are too low. Geocoding APIs are surprisingly expensive...

May 19

- [x] Create screenshots and other details for App Store
- [x] Update website
- [x] Submit 1.0.0 (107) for review
- [x] Stop navigating if location not authorized
- [x] Extract offline map state to prevent menu flashing when maps are downloading because of changing settings state
- [x] Correctly collapse expanded badges in landscape
- [x] Attempted to put elevation for map center and location expanded badges but rejected as it takes up too much room. Maybe distance and bearing section would be better?
- [x] Improved haptic feedback. Was going to add haptic when alert shows but turned out to be too much and not needed, especially when using swipe to delete which already includes a system haptic.

May 18

- [x] Hide Dark map behind developer setting
- [x] Match map contour elevation unit to app elevation unit
- [x] Add required location Info.plist entry
- [x] Launch landnav.app and point app to that URL

May 17

- [x] Restructure app state to prevent unneeded view updates
- [x] Hide marker image on compass
- [x] Fix selected badge action menus flashing when location updates
- [x] Improve layout of numeric decimal degrees
- [x] Improve layout of map action button

May 16

- [x] Fix name, detail and color (item properties) doesn’t refresh item view in Items Tab while editing color or elevation (marker properties) does cause view to update. WTF?
- [x] Correctly align data cell row label images
- [x] Fix recover deleted item does not update view
- [x] Move Zoom to Extents action into menu
- [x] Select base map in move marker sheet
- [x] Confirm to delete items
- [x] Move marker sheet allows changing map style

May 15

- [x] Fix menu flashing by refactor to use app state container: <https://www.fivestars.blog/articles/app-state/>

May 14

- [x] Improve how external apps are handled
- [x] Select Apple Maps or Google maps
- [x] Select Apple Weather or Open Weather
- [x] Fix view structure on Location tab to prevent flashing action menu caused by location updates

May 13

- [x] Fix selecting offline map region on iPad
- [x] Markers can open Apple Weather
- [x] Initial work on fixing flashing menus by reworking views so that location service isn’t at a top level. Instead its brought into small views exactly where it’s needed.

May 12

- [x] Add shortcut to map from items tab
- [x] Post Creating your first map with Land Nav video
- [x] Tried but failed at loading GPX file into Xcode to simulate location. File selector has .gpx files grayed out

May 11

- [x] Show notes on drawing badge when expanded
- [x] Show map cursor when my location badge is visible
- [x] Only show date in title when it will fit
- [x] Map Center item should always be visible in Items even when map has no markers. E.g., Items will only show a blank slate when there is no active map?
- [x] Post an initial video talking about the app. It doesn’t have to be good but it shouldn’t be horrible.

May 9

- [x] Update screenshots on lander site
- [x] Send announcement to friends and SFSAR

May 8

- [x] Fix parsing DM, DD, DMS separators
- [x] Improve UTM parsing
- [x] Experiment with only using a single text field for entering coordinates. I actually think the structured editors make things more complicated than it needs to be.
- [x] Show coordinates, elevation, and notes in expanded badge
- [x] Replace print calls to logging or remove
- [x] Change IAP purchase to $19.99 lifetime
- [x] Improve onboarding
- [x] Remove unused Roboto fonts
- [x] Only show Developer Mode option when app purchased
- [x] Post test flight build 🎉

May 7

- [x] GPX splits track segments into separate tracks. Temp until I determine exactly how drawing with multiple lines should be handled. Especially regarding editing.
- [x] Reverse drawing operation always available

May 6

- [x] Experiment with night vision mode. Decided against it.
- [x] Change zoom button icons
- [x] Setting to turn off zoom buttonsRename Map Widgets section back to Map

May 5

- [x] Coordinate editor shows distance from original coordinate
- [x] Numeric decimal degrees
- [x] Support decimal seconds to DMS
- [x] Correctly round minutes and seconds
- [x] Coordinate editor can switch coordinate system
- [x] Paste coordinates into coordinate editor
- [x] Experimented with badge context menus. Neat but maybe something based on feedback from users. I’m not sure I need it. Need to resist the urge to keep sticking in features.
- [x] Fix leading zeros in coordinate editors

May 4

- [x] Experiment with coordinate format picker getting pushed as navigation view (vs sheet). Not as good so rejected it.
- [x] Refactor coordinate editor to simplify and improve UX

May 3

- [x] Import new map has unique menu icon
- [x] When showing import info for zip use navigation link to view contents of each zip file
- [x] Prevent importing ZIP files into an existing map
- [x] Extract sheet state from scene state
- [x] Refactor MapView and MapView.Content
- [x] Extract new layer sheet into main sheet
- [x] Use different text colors for different map styles
- [x] Hide my location mark action when no active map
- [x] Fix bug where heading can show as 360° N
- [x] Fix bug where 60” can appear when showing DMS coordinates
- [x] Simplify picking coordinate formats
- [x] Easily copy coordinates to clipboard via long press

May 2

- [x] Refactor notifications
- [x] Add notification for import results (removes the need for custom toast). Why didn’t I think of this earlier?
- [x] Improve map marker font
- [x] Convert Export to use MainSheet
- [x] Improve menu and action labels
- [x] Import GPX into an existing map

May 1

- [x] Refactor rename layer sheet
- [x] Allow long press marker creating on drawings
- [x] Allow long press to create marker over drawing

Apr 30

- [x] Rounded top corners for bottom badge
- [x] Hide ruler in developer mode until 2 finger tracking working
- [x] Hide reset camera in map pitch context menu
- [x] Add rename menu action in map menu
- [x] Reorganize menu layouts
- [x] Import URL in background, import without confirming with UI

Apr 29

- [x] Remove showSelectedItemBadge state. Not needed now that mapSelection can be mapCenter.
- [x] Fix bug where item is selected then tap on myLocation hides selected item badge
- [x] No hepatic feedback when selecting item or map center in items tab
- [x] Expandable item badge replaces item sheet
- [x] Improve badge title font size

Apr 28

- [x] Fix broken coordinate format sheet on map tab in item sheet caused by MainSheet not working with nested sheets.
- [x] Add icon image for map center my location
- [x] Map cursor uses image instead of shape
- [x] Show map center item in layer view
- [x] Experimented with customizing the large title but it uses a private API and really only allows putting an image on the trailing edge. This isn’t ideal and since it might get the app rejected I’ve dropped the idea.
- [x] Set itemsTabPath to mapCenter when map center badge is shown. This might require mapCenter MapContentKind

Apr 27

- [x] Coordinate Format and New Format sheet into MainSheet
- [x] Move ruler badge to top
- [x] Bottom badge uses full width

Apr 26

- [x] Investigate using ShareLink but can’t use it because no way to dismiss the share sheet. Improved ActivityView instead by making a ShareLinkHelper module
- [x] Started initial work on moving code to have only 1 MainSheet so that sceneState can dismiss it when importing (or for any other reason).

Apr 25

- [x] Disable pitch and rotate on offline maps
- [x] Correctly initialize map camera when selecting offline map region
- [x] Import GPX saves date if entered
- [x] Export layer data, route, regions, and tracks
- [x] Improve formatted of layer row date and detail

Apr 24

- [x] Use Link for Open in Apple Maps
- [x] Investigated multitouch gestures for ruler so that both fingers could move points A and B but after 2 hours without a great end in site stopped working on the feature. I think there is a problem/conflict with the UIPanGesture that I installed and the dragging gesture originally added for the ruler
- [x] Rename Copy to Other Map

Apr 23

- [x] Replace visible layers with favorite maps
- [x] Add optional date field to layers
- [x] Always show items tab
- [x] Always show location and compass tabs
- [x] Location shows from my location
- [x] Use P101 as default marker name
- [x] Do not suggest item code names by default
- [x] Tap coordinate badge to edit map camera
- [x] Copy to Map replaces Move to Map

Apr 22

- [x] Snap to markers
- [x] Snap to my location puck
- [x] Show item name on ruler badge
- [x] Feedback when snapping to new item
- [x] Show ruler badge independent of selected item badge
- [x] Reset or turn on ruler vs toggle
- [x] Sync map selection and items tab path
- [x] Tweak marker annotation text

Apr 21

- [x] Initialize based on view port coordinates so it always appear in bottom-left and top-right
  - [x] Save map coordinator so we can can get coordinates based on current map view left and right
  - [x] Inset view rect by 50% and take A = bottom left and B = top right
- [x] Remove ruler annotations when is hidden
- [x] Save ruler state correctly OR hide it on startup
- [x] Move Show/Hide Ruler to action menu in top right (vs plus menu)
- [x] Remove Mark map center action and entire + action button unless drawing is enabled
- [x] Render thumb gripper annotations

Apr 20

- [x] Initial 2 thumb ruler

Apr 19

- [x] Rename map vs from in UI
- [x] Fade base map changes
- [x] Move marker action brings up new map sheet modal interface like maps
- [x] Correctly show map center badge on map tap
- [x] Fix select offline map initial camera (should be same as current map camera)
- [x] Show map cursor if elevation or coordinates shown
- [x] Do nothing when chasing map style to current style

Apr 18

- [x] Fix Acquiring Location state lang on Location tab
- [x] My location shows from (vs to) map center
- [x] Don’t show map tab badge when location denied
- [x] Compass should only tick on compass tab (not map tab after navigation state change)
- [x] Do not dismiss map when deleting drawing
- [x] Restore deleted items view
- [x] Make title disclosure indicator smaller
- [x] Rename Notes from Description
- [x] Separate last used marker and drawing colors
- [x] Clear items tab path when clearing map selection
- [x] Fix selecting nothing doesn’t refresh selected marker or drawings
- [x] Add loading overlay for maps

Apr 17

- [x] Fix map camera state restoration
- [x] Add loading screen to improve look of launch
- [x] Upgrade Mapbox to see if camera glitch is fixed (not completely but maybe better, hard to tell)
- [x] Move + button back from menu bar for map actions
- [x] Add show all map items action
- [x] Hide navigation when item on different layer
- [x] Remove concept of unsaved items, markers should be savable
- [x] Change items tab path when map selection changes

Apr 16

- [x] Solved issues around restoring NavigationStack path issues. <https://github.com/gshaw/notes/issues/10>
- [x] Introduce SceneState for improving view state restoration

Apr 15

- [x] Rename views to match new app layout
- [x] Rename operation on Items tab by clicking navigation bar title
- [x] Rename operation on Map tab by clicking navigation bar title
- [x] Fix issues with long layer names

Apr 14

- [x] Determine if it’s possible to have 2 navigation stacks (Maps and Items) share the same path so they stay in sync. This way Location and Compass tabs don’t have a Navigation Stack but Map and Items do and they sync together.
  - [x] Yes, it’s possible but has a problem with Items tab when path is focused on a specific item.
- [x] Try experiment with separate paths
  - [x] Still too confusing
- [x] Try experiment with Maps tab selects the activeLayer and only where there is an active layer does the items tab appear.
  - [x] This appears to be working and I’m going to roll with it some more.

Apr 13

- [x] Mark map center (or other places) smoothly flys camera to 2D location
- [x] Add map style icons
- [x] Simplify layer images in preparation to remove active layer concept
- [x] Improve layer picker to use a save button

Apr 13: Field Testing Notes

- [x] Long pressing to create waypoints is great
- [x] Having to save waypoints sucks, most will want to be saved so that should be the default. It’s not hard to delete ones you don’t want.
- [x] Really want to have a “map” document with easily editable notes. I’m thinking of going back to the nav bar for maps with the title a dropdown that makes it easier to Rename title (not that useful) and description (very useful).
- [x] Interesting that the app will be shown to others so it needs to be intuitive and impressive quickly to people not used to using it. Maybe that is just pride for myself.
- [x] Need to be able to answer: what will make Land Nav better in one sentence with a compelling reason.
- [x] Land Nav is a good name

Apr 12

- [x] Compact action buttons like Maps app
- [x] Fix Publishing changes from within view updates is not allowed on HandleOnCameraChanged
- [x] Design how active layer will be removed and new marker flow using default nil layer for dropped markers and a Move Marker action sheet.

Apr 11

- [x] Accept that large data sets won’t work well for now so just disable features that will be slow for launch so that I can move on.
- [x] Accept that it’s OK to update ruler while camera is in flight because eventually ruler will be independent of the camera and same with drawing.
- [x] Correctly draw ruler when first shown without having to move camera
- [x] Do not support measuring to/from drawings (performance on Hextrex and UX issues make this problematic)
- [x] Improve performance of determining drawing point count
- [x] Show point count on Edit Points action button
- [x] For now prevent navigating drawings with > 2500 points
- [x] For now ruler only measures between markers
- [x] For now only snap to markers while drawing
- [x] Make layer visible when editing points

Apr 6

- [x] Drawing view reverse / edit points in view looks wrong
- [x] Fix not working close button on edit drawing.
- [x] Don’t include cursor point on drawing when camera in flight.
- [x] Don’t show ruler annotation when camera in flight
- [x] Investigate tap marker performance. No actual delay, just feels like it like because of the gesture recognizer fires on touch up I think.
- [x] Investigate delay between actions and UI update. Caused by heavy work like saving a CoreData model on the UI thread. Resolution is to run code in Task block that can still happen on the main thread but be scheduled at a later time when UI is idle.

Apr 5

- [x] Extract navigation annotations logic from MapView
- [x] Rename BuildAnnotations module
- [x] Map controls can be hidden
- [x] Fix ruler between 2 drawings not unhighlighting hovered destination
- [x] Moving ruler annotation to the navigation line layer
- [x] Make it easier to tap on my location puck

Apr 4:

- [x] Add ability to refresh a set of annotations with refreshMapAnnotations
- [x] Merge UpdateMapNextDrawPoint into UpdateMapCursorPoint
- [x] Remove UpdateMapHoverKind
- [x] Save map item sheet and badge state
- [x] Ruler uses puck coordinate
- [x] Extract from MainMap HandleOnCameraChanged
- [x] Extract from MainMap HandleOnMapTap

Apr 3

- [x] Ruler mode draws line annotation between points
- [x] Compass Tab should be side by side if viewport is wider than height

Apr 2:

- [x] Upgrade to latest SwiftFormat and SwiftLint

Mar 31:

- [x] Improve map states and actions for navigate, show, delete, and edit points
- [x] Reverse drawing operation
- [x] Started looking into performance issues with CoreData. Not resolved. Could be a problem.

Mar 30:

- [x] Refactor map layers and state logic. I still can’t seem to get markers to render under line layers but since I don’t want that it’s OK to move one. I still don’t fully understand Mapbox layers code because when I make the change to move markers under lines it doesn’t work. This means I have a gap in knowledge.
- [x] Simplified refresh logic so items that are removed from map don’t stay around if they were selected. E.g., when map items are refreshed the map selection and hover states are refreshed as well.
- [x] Edit existing drawing
- [x] When ruler mode ends clear hover kind

Mar 29

- [x] Refactor selected item badge to be explicit about action closures
- [x] Add Change Layer action for items
- [x] Experimented with not showing close button on selected item badge but rejected idea. Felt odd that it was shown on the sheet but not the badge and I think there should be an obvious way to close the badge.
- [x] Remove feedback hepatic when clearing selection
- [x] Update hover kind when ruler is active
- [x] Fix selected item badge sheet toolbar colors not using the accent color. Caused by badge setting foreground Color.
- [x] Simplify map state annotations
- [x] Upgrade Mapbox styles to v12
- [x] Upgrade Mapbox package to latest release

Mar 28

- [x] Fix UI glitch on selected item sheet bottom safe area
- [x] Improve selected item badge and related views for rendering the compact and regular. Standardize on view names to make them predictable.
- [x] Selected Item Badge for active drawing
- [x] Allow editing name and color of active drawing
- [x] Show and navigate actions show selected item badge
- [x] Provide haptic feedback
- [x] Only detect hover items while drawing
- [x] Use system defined colors for markers and lines
- [x] Improve My Location view when acquiring location
- [x] Destination cell on compass tab functions like Show button
- [x] Add swipe up (show details) and down (hide badge) gestures to selected item badge

Mar: 27

- [x] Fix bug with buy sheet and action button menu
- [x] Remove selectedItemSheetDetent
- [x] Tap selected item badge to show selected item sheet
- [x] Limit text on selected item badge to 1 line
- [x] Selected Item Badge for drawings
- [x] Selected Item Badge for my location
- [x] Selected Item Badge for map center

Mar 26:

- [x] Don’t adjust zoom when undoing a drawing point
- [x] Improve zoom calculation when flying to coordinate
- [x] Snap to drawing lines
- [x] Introduce selected item badge UX to replace selected item sheet
- [x] Use materials and colors for badge backgrounds
- [x] Rename showSelectedItemSheet as showSelectedItemBadge

Mar 25:

- [x] Fix delay when adding drawing segments
- [x] Snap to markers when drawing

Mar 24

- [x] Fix bottom safe area for My Location
- [x] Improve selecting and hover badge when creating new markers
- [x] Improve Map Center and My Location distance and bearing sections
- [x] Continue with drawing routes

Mar 22

- [x] Improve navigate action icon
- [x] Use accent color for layer states (vs green)
- [x] Fix map badges to not overlap with buttons
- [x] Tried showing marker image on subtitle line but doesn’t make sense. The image title pattern is so ingrained it looks odd to see image below the text.
- [x] Navigate routes and tracks
- [x] Navigate to closet perimeter coordinate on a region (vs center)
- [x] Improve UX for navigate and show actions

Mar 21:

- [x] Improve importing by parsing content in background and showing progress indicator
- [x] Group drawing items by kind in Layer View
- [x] Move hover badge in badge stack instead of map center
- [x] Badges toggle selected item sheet

Mar 20:

- [x] Fix La La island capital Island. Check each day to see when Map Box picks up update.
- [x] Map action menu for mark map center and show ruler actions
- [x] Show item shows the layer if not active or visible.
- [x] Fix show drawing to use bounds vs bounds center
- [x] Implement DrawingView for routes, tracks, and regions
- [x] Fix marker name editor not updating shape and color
- [x] Allow selecting drawing from hover badge to show drawing view on selected item sheet
- [x] Highlight drawing when hovered on map
- [x] Drawing route and track start/end points and region areas

Mar 19:

- [x] Fix bug where deleted layers were still showing items on the map.

Mar 18:

- [x] Import routes and tracks as red (vs green)

Mar 13-16:

- [x] Heavily refactor database design separating Items into Markers, Drawings, DrawlingLines, DrawingPoints only to revert it all back to a better Items implementation. Turns out syncing 10,000s of tiny point records is super inefficient in iCloud and using a ValueTransformer I can save an array with a 1000 points (I think - didn’t measure) very quickly. I based most of my impressions on the volume of iCloud logs. Not very scientific but the end result is pretty good. I still don’t like how there is now an item and markerPropertites or drawingProperties but I might be able to improve that with some helper structs/objects for some views.

Mar 12:

- [x] Improve measuring between markers and my location
- [x] Show elevation on 3D maps
- [x] Updated Mapbox map styles to latest versions

Mar 11:

- [x] Correctly format example coordinate in settings
- [x] Change offline map zoom level to be menu badge
- [x] Change options to be square or rectangle for download area.
- [x] Align coordinate format title correctly
- [x] Improve look of menu pickers
- [x] Fix import file

Mar 10:

- [x] Remove map pitch and rotate restrictions
- [x] Implement Project, Mark, and Show actions
- [x] Fix map center coordinate alignment when value wraps (degree minutes on Map Center)
- [x] Improve sheet buttons on devices with large text size
- [x] New layer icon on layers root view
- [x] Improve layers and items action menus

Mar 9:

- [x] Redesign map button stack
- [x] Replace base map sheet with basic menu
- [x] Remove outdoors 2D map style keeping only 3D version
- [x] Add 3D/2D buttons to adjust pitch
- [x] Add Zoom In/Out buttons to adjust zoom

Mar 3-8: (Mostly time off)

- [x] Fix performance issues caused by building map items during render instead of building when something changed.
- [x] Active layer badge
- [x] Improve map badges

Mar 2:

- [x] Rename Overlay to Layer in code and data model
- [x] Move item to new layer
- [x] Move selected items to different layer

Mar 1:

- [x] Improve developer mode options
- [x] Hide location and compass tabs if location services not available
- [x] Show message on location tab when location is not available
- [x] Improve elevation cell UI when value unknown
- [x] Improve readability of status bar, badges, and buttons on map tab
- [x] Right align UTM and MGRS when shown on two lines

Feb 28:

- [x] Prevent deleting active layer when using delete selected
- [x] Make selected layers Visible/Hidden
- [x] Show controls to make active and show/hide on LayerView. When layer is active or shown explain what that means and give the option to change it. Consider adding commands to action menu. Rejected idea, makes things more complicated. I think for now all layer controls happen in LayersView rather than moving to multiple views.
- [x] Always show compass heading on map when navigating regardless of setting.
- [x] Rename Visit Website on about
- [x] Rename Contact Developer on About
- [x] Fix buy map badge vertical padding when coordinates and compass is not visible
- [x] Hide area unit unless experimental regions is enabled
- [x] Improve hover badge UX
- [x] Rename Customize for Edit Details on coordinate format row
- [x] Fix compass tab not updating when location changes

Feb 26-27:

- [x] Toggle visible of layer should update UI to show eye icon
- [x] Move checkmark (active) and eye (visible) to left column
- [x] Show markers from all visible layers
- [x] Separate active markers and visible markers, when adjusting camera after active layer changes, only zoom to bounds of markers on active layer
- [x] Hide pinned/favorites layer feature
- [x] Fix description of active layer footer text to mention that active and visible layers are visible on the map.
- [x] Make Active & Visible / Make Visible / Make Hidden

Feb 25:

- [x] Rename views and models as appropriate for updates tab and layers UI

Feb 10:

One year anniversay of devlopment. Should be finished any day now... 😵‍💫

Feb 3:

- [x] Redesign UI to use tabs because why not completely redesign the app again. 🎉
- [x] Add overlay cell to item view
- [x] Fix compass heading service getting enabled on compass and map tabs correctly

Feb 2:

- [x] Do not ask for always location tracking
- [x] Tweak continent coordinates
- [x] Support landscape mode
- [x] Initial redesign work to use tabs

Feb 1:

- [x] Import new overlay from GPX file
- [x] Import many overlays from selecting ZIP file using Import File
- [x] Import from ZIP file using Files.app
- [x] Refresh map annotations when Show Marker Names is changed in settings
- [x] Export overlay as GPX
- [x] Export selected items as GPX

Jan 31:

- [x] Show navigation info on compass sheet
- [x] Use locale continent for default coordinates
- [x] Use locale for setting initial units
- [x] Use overlay bounds when suggesting overlay name
- [x] Only show blank slate when overlay is truly blank
- [x] Improve look of overlay sheet disclosure icon

Jan 30:

- [x] Tapping Mapbox compass stops map tracking
- [x] Implement Navigate To
- [x] Implement Stop Navigating
- [x] Request notification permission when starting navigation
- [x] Show navigation annotation on map
- [x] Fix bug where creating new overlay results in navigation title being transparent.
- [x] Optimize map updates so that map action menu does not flash because of location service updates
- [x] Show navigate info on badge
- [x] Add optimization to prevent too many updates when watching puck location (because puck smoothly animates)

Jan 29:

- [x] View extension to perform action when application moving to the background so that camera is saved correctly.
- [x] Refactor camera logic to simplify and make more modular and come to a better understanding of it.
- [x] Clamp map camera zoom when tracking location to reasonable range
- [x] Select offline map uses last camera value
- [x] Do not update coordinate when picking coordinate format OR editing a go to coordinate
- [x] Implement show item on map action
- [x] Show current location info on compass sheet

Jan 28:

- [x] Fix initial map camera bounds
- [x] Fix turning off tracking state with user interaction
- [x] Keep puck in map center when tracking location

Jan 27:

- [x] Fix overlay name not updating navigation title on overlay sheet after updating
- [x] Show selected marker in SelectedFeatureSheet
- [x] Add My Location action menu item
- [x] Use current position in suggested names for overlays
- [x] Fix determining new untitled overlay name
- [x] Fix new overlay transparent navigation bar glitch
- [x] Hover badge shows item name

Jan 26:

- [x] Fix zoom to bounds when changing overlays
- [x] Fix target camera zoom to and map state problems
- [x] Fix restore original camera bearing and pitch when returning to same overlay
- [x] Add UI hooks to support import URL
- [x] Show down chevron to bring up overlay sheet like Ivory and Apollo and others (vs trailing/right chevron)
- [x] Remove unneeded hack with navigation stack and mapbox map view

Jan 22-24:

- [x] Continued smashing head. I’ve got a better understanding of state and list quirks but still not satisfied. I’m starting to document some of the issues that I find in GitHub under a new notes project using issues. This way I’ll be able to share a link to others to ask for help or use as a reference of stuff to ask for help on if I ever get a chance.

Jan 20-21:

- [x] Smashing my head with understanding SwiftUI state. I’m starting to get it but I really wish I would have somebody to confirm my mental model of it. It’s frustrating because I just want a pattern that I can use for views and a set of rules to follow and I still haven’t been able to figure that out. Everything seems to be working again.
- [x] RecentlyDeletedItemsView
- [x] Show list of recently deleted items
- [x] Restore recently deleted with confirmation
- [x] Hard delete with confirmation
- [x] Hard delete after 30 days

Jan 19:

- [x] Fix bugs related to overlays and items not updating correctly because of ObservedObject and related SwiftUI witchcraft.
- [x] Generate predictable default marker name
- [x] Remember last marker color and shape
- [x] Edit overlay name and description via OverlayEditor
- [x] Use OverlayEditor when creating new overlay
- [x] Sort items by updated at by default
- [x] Filter items name
- [x] All sorting items by name or date
- [x] Show blank slate when search text returns no results

Jan 18:

- [x] Rename Overlay/Item from Document, Project, Feature, Waypoint
- [x] Edit item name, color, shape

Jan 17:

- [x] Create welcome project on first launch
- [x] Fix toggling map between 2D & 3D
- [x] Rename MapState from AppState and inject deeper into view tree
- [x] Fix Launch action so that it only creates a single Welcome document on the first device and not on all devices
- [x] Refactor FetchedResults from HomeView into AppView but keep it just publishing projectDictionary. HomeView will re-render and split up into different views on a db change.
- [x] Rethink AppMain > AppView > ProjectView > DocumentView

Jan 15-16:

- [x] Research how to remove GRDB from coordinate formats and offline maps. Decided on using AppDefaults and JSON serialization because the amount of data is quite small.
- [x] Refactor coordinate formats to save with AppDefaults as JSON
- [x] Refactor offline maps to persist using AppDefaults saved as JSON (vs saving in GRDB)
  - [x] Fix file size not showing up after saving, likely not getting updated during progress?
  - [x] Fix hang/crash when resizing offline map region
  - [x] Deleting an offline map needs to cancel the download
  - [x] Fix fast download finishes as canceled - likely a race condition
  - [x] Fix app killed before download completed and download is left hanging but unable to Cancel
- [x] Remove GRDB dependency and related code
- [x] Fix flashing menu in document view by moving location service and heading service higher into the environment vs at the AppMain level. Eventually AppState should be renamed to MapState and moved there as well. Then consider renaming AppSettings back to AppState?
- [x] Extract LocationServiceStatus() from LocationService

Jan 13:

- [x] Add point at map center
- [x] Item description editor (fixing bug where edited items weren’t updating DocumentSheet correctly)
- [x] Show coordinates for marker items
- [x] Edit marker altitude
- [x] Show markers on map
- [x] Improve developer mode settings

Jan 12:

- [x] CoreData / iCloud working. Starting migrating code to use it. This is going to be huge.

Jan 6-11:

- [x] CoreData / iCloud experiment. Worked on a test app inside of Land Nav to see what it would be like using Core Data and iCloud. There are a few bumps but I’m convinced this is a better route than using GRDB and will now start converting the app to use it.

Jan 5:

- [x] Add Settings > Geofences and show list of all monitoredRegions with the ability to delete each one

Jan 4:

- [x] Make documents view use context menu like Freeform instead of lots of swipe actions
- [x] Refactor database migrations

Jan 3:

- [x] Update welcome map text
- [x] Handle case where user can’t make payments
- [x] Make Land Nav test flight build to get App Store ID and IAP ids

Jan 2, 2023:

- [x] Update new and edit icons
- [x] Remove bottom toolbar from Documents view
- [x] Show UI to confirm before import Zip file
- [x] Disable new/import unless purchased when >= 2 maps present
- [x] Unlock full app with in-app purchase

Dec 30:

- [x] Renamed as Land Nav

Dec 28:

- [x] Implement delete and export selected items
- [x] Remove move selected items and document picker feature. Same feature can be done via Export/Import
- [x] Replace app icon to not use SF Symbols (which aren’t allowed to be used in app icons)

Dec 27:

- [x] Clean up button labels and general UI tweaks
- [x] Simplify map options, only show/hide names
- [x] Remove fullscreen support
- [x] Offline maps under settings
- [x] Left handed map download map option or provide thumb tool on both sides
- [x] Add quick access to mark map center
- [x] Show Compass doesn’t hide navigate to compass badge (only the heading badge)

Dec 24:

- [x] Export/import GPX preserves all data

Dec 22:

- [x] Use natural naming (e.g., Point 1, Track 21) and ordering
- [x] Clean up select, tracking, and editing state when deleting features

Dec 21:

- [x] Request to show notifications when tracking startsShow notification and stop recording when app is killed to indicate track recording as stopped
- [x] Show notification when arriving at waypoint or end of feature
- [x] Add setting to indicate distance to trigger alert when navigating
- [x] Ask for notifications when navigate to is configured AND arrival distance is not nil
- [x] Codename generator for waypoint and feature names

Dec 20:

- [x] Remove need for always accessing location - not needed

Dec 19:

- [x] Removed unneeded DebouncedChangeViewModifier because it isn’t needed in the app but keeping a link as I might need it in the future.
- [x] Remove needless method parameters, mainly passing appState when in view methods
- [x] Update SwiftLint and SwiftFormat to latest versions
- [x] Update track recorder badge to update every second to give feedback that recording is still happening
- [x] Red track recorder badge icon. Tried flashing it but I think that is too distracting. Having the second update is enough to provide feedback something is working.
- [x] Upgrade to latest MapboxMaps and GRDB

Dec 15-16:

- [x] Show track recorder badge
- [x] UI to show when track recording on different map

Dec 6-14: ??? Track recording research? Was feeling burnt out and disillusioned and needed a break.

Dec 5:

- [x] Add new map button to maps instead of toolbar

Dec 2:

- [x] Created at in footer
- [x] Implement finish and resume track recording
- [x] Improve UI for setting feature kind
- [x] Improve UI for feature actions

Nov 27, 28, 30, Dec 1: Needed a break so played a bunch of Civ5 and chilled

Nov 29:

- [x] Initial track recorder (only works in foreground)

Nov 26:

- [x] Improved sheet UI

Nov 25:

- [x] Simplify feature description
- [x] Hide modified at on Waypoints and Features details

Nov 24:

- [x] Show area instead of distance in region details
- [x] Group features by kind
- [x] Save document lastOpenedAt and allow sorting by that so we show the most recently used documents first
- [x] Remove document date
- [x] Show description in document list view
- [x] Remove distance away document sheet view list view. Distance away is difficult for lines and regions and I’m not sure it provides a lot of value. Something that could be added later.

Nov 23:

- [x] Refactor how map annotations so areas are drawn differently than lines
- [x] Draw region border for unmodified/modified using a line
- [x] Hide features when selected, hovered, editing using new highlighted feature state
- [x] Navigate to region navigates to center of region (easier to handle case when inside region than navigating to closets point on outside of region)

Nov 19-22:

- [x] Delete Marker and Delete Line messages
- [x] Reverse line
- [x] Initial region drawing
- [x] Edit feature kind
- [x] Area units
- [x] Refactor how coordinates are managed for feature records
- [x] Delete features with fewer than 2 points (3 for regions) when drawing is done
- [x] Add custom region icon

Nov 14-18:

- [x] Tap to toggle Distance To Dest/To Next
- [x] Show Distance and Bearing on top row
- [x] Hide Duration
- [x] Swap course and speed
- [x] Closing My Location sheet inside nav sheet should not close nav sheet

Nov 12-13:

- [x] Navigate along routes
- [x] Fix wrapping in document view title when name is long

Nov 11:

- [x] Fix location services turned off or reduced accuracy
- [x] Hide cursor badge when highlighted = selected and sheet open.

Nov 9-10:

- [x] Only zoom to bounds when map changes
- [x] Add start/end circle markers to lines

Nov 7-8:

- [x] Hide elevation profile and all other line actions (for now)
- [x] Change line icon to be a single line without vertex and make it horizontal and not have a background halo
- [x] Rename plus to cross for markers
- [x] Reduce UX churn/flickering when location updates
- [x] Improve UX when location services turned off

Nov 5-6:

- [x] Use smaller coordinates font
- [x] Show feature and waypoint counts in documents view
- [x] Rename Waypoint as Marker
- [x] Add dot marker shape
- [x] Fix map scale
- [x] Improve map coordinates badge

Nov 3-4:

- [x] Edit feature record description
- [x] Show feature record should select it
- [x] Worked on hover and selection but still haven’t figured it out yet

Nov 2:

- [x] Show badge above cross hairs
- [x] Hide map selection label in coordinates
- [x] Open go to panel when tapping on coordinate
- [x] Disable hepatics to see if it’s missed
- [x] Import routes as red by default (vs cyan)

Oct 23-Nov 1:

- [x] Efficiently editing maps with a large number of features (lines)

Oct 20-22:

- [x] Highlight routes on map when featureRecord selected (not just hovered)
- [x] SelectedFeature sheet shows selected waypoint or feature (or nothing)
- [x] Map selection to select myLocation and be prepared for it to select other POI
- [x] Tap map, uses 32x32 rectangle (vs point) to detect features
- [x] Tap map, if under mapCursor, if let hoverKind: select hoverKind; open sheet
- [x] Provide hepatic feedback if tapping selects something

Oct 17-19:

- [x] Lots of investigation into understanding state and SwiftUI. I think I’m starting to get it. SwiftUI likes structs and keeping state simple. ViewModels make that difficult.
- [x] Remove DocumentViewModel
- [x] Rename SelectedFeatureSheet

Oct 9-16:

- [x] Lots of refactoring getting state and styles to work correctly so that hover detecting of waypoints and routes works correctly. I needed to completely rework WaypointView to not use a view model because the center point sheet that was calling the waypoint view was initializing the view model in the initializer but then when the waypoint changed for the view, the changes weren’t getting reflected. Also, when WaypointView was listing for database changes it seemed like it was listening to every waypoint in the document! I think I fixed all this by making WaypointView dumb. I’ll need to go through and look at all instances where database observation is happening to see if there is more of this going on but for now will focus on getting route drawing to work in hopes of getting to feature complete.
      Oct 7-8:
- [x] I’m a stubborn mother fucker. Finally after reading the docs and going through example code I’ve been able to get FeatureState, Sources, Style layers and expressions all working to efficiently style specific features like tracks. This is going to make the app possible.

Oct 4-6:

- [x] Working on improving performance when dealing with large number of routes/tracks. Mapbox’s queryRenderedFeatures method allows using the built-in spatial index for fast look up of annotations.
- [x] I still think there is a lot of performance issues that I’m messing up with SwitUI, and especially around LocationServices causing the view to update to frequently.

Oct 2:

- [x] Zoom to routes/bounds

Sep 30:

- [x] Improve drawing sheet UI

Sep 29:

- [x] Improve design of selected/not-selected drawing lines and vertices
- [x] Show next vertex annotation when editing drawing in white

Sep 28:

- [x] Detect drawing vertex and segments under point
- [x] Snap to route vertices when drawing
- [x] Snap etc route edges when drawing
- [x] Drawing OR Waypoint can be selected

Sep 27:

- [x] DeleteDrawing operation
- [x] Done drawing operation
- [x] Show routes in document sheet
- [x] Improved Z-order of map annotations
- [x] Draw route vertices with map annotations
- [x] Route icons (based on color)

Sep 26:

- [x] Redesign drawing UI to use sheet instead of buttons/badges
- [x] Save routes in database

Sep 25:

- [x] Fix bug with edit mode in DocumentsView not removing selection and changing editMode correctly.
- [x] Decided (again) not to use pushed controllers for document sheet OR waypoint details. The app design revolves around the map for the document sheet so using a pushed controller feels too heavy. For waypoint editors the UI would be different when pushing a controller from the waypoint center point sheet vs the document sheet so didn’t even try it.

Sep 24:

- [x] Tried but rejected fading map on will disappear because it will require too much logic to handle when view might disappear but the user doesn’t complete the slide back gesture leaving a faded out view.
- [x] Refactored code in prep for document view re-organization
- [x] Consider Maps > Map (sheet contents) > mapbox map view. This would remove sheet. Allow putting a thumbnail of map bounds on details view. Tapping opens the full map. Back button from map to get contents. NO lots of work to make it functional I think and it feels more complicated. The goal is to get to the map fast.

Sep 23:

- [x] Bash head around state issues and other SwiftUI limitations

Sep 22:

- [x] Open GPX from Files.app and other apps via share screen, e.g., export from MilGPS

Sep 21:

- [x] Export description and date as GPX extension
- [x] Fix crash when moving selected waypoints
- [x] Import description and date from GPX
- [x] Export selected documents from documents view

Sep 20:

- [x] Improved camera animations and app state code
- [x] When tracking current location camera fly duration should be longer, e.g., about 1 second so that it smoothly animates between location updates. Using 200ms makes for jumps
- [x] Investigate flashing doc menu caused by refreshing polyline annotations during GPS updates. Not sure why. Spent some time removing global access to heading, location, and motion services but it didn’t help.
- [x] Possible bug with Done button when selecting documents. One time Done was shown but tapping wasn’t changing EditMode. Unable to reproduce.

Sep 19:

- [x] Add CloseButton to WaypointSheet
- [x] Clean up bottomSheet code
- [x] Try Swift 5.7 Regex, not worth changing working code
- [x] Refresh map annotations when waypoint settings (e.g., show coordinates always) is modified
- [x] Investigated published changes runtime warning: Likely a bug that will be fixed. Others are having issues with it so putting it on hold until guidance from Apple becomes available.
  - <https://developer.apple.com/forums/thread/711899>
  - <https://www.youtube.com/watch?v=3a7tuhVpoTQ>
  - <https://stackoverflow.com/q/73323869/265940>
  - <https://www.donnywals.com/xcode-14-publishing-changes-from-within-view-updates-is-not-allowed-this-will-cause-undefined-behavior/>
- [x] Consider move of operations to AppState extensions - NO
  - Difficult to separate helper methods on AppState from user operations. I fear this will be a huge logic soup if I go this direction.
  - There is some value in having helper methods used by the operations for common actions but ideally each user action is its own Operation (or Action) enum.

Sep 17:

- [x] Upgrade Mapbox to 10.8.1
- [x] Remove ToastUI dependency
- [x] Upgrade GRDB to 6.0.0

Sep 15:

- [x] Redesign map bottom sheets
- [x] Initial improvement on animating map camera
- [x] Set deployment target to iOS 16
- [x] Fix stuck selection in lists and wrong title in back button pattern on iOS16.
- [x] Determine what to do about bottom bar problem
- [x] Hide document details on document sheet when searching
- [x] Fix publishing changes runtime warning caused by acknowledgeMapViewDidUpdate

Sep 14:

- [x] Fix offline maps initial download getting canceled has null requiredTileCount but while downloading it was present.
- [x] Determined issues with iOS16 thanks to Stack Overflow. I’m considering going with iOS 16 but not required. A UI design tweak to not use toggling bottom bars will work around the problem and there is precedent with the Notes app in this behaviour.

Sep 13:

- [x] Rename onUpdate and onCancel to updateAction and cancelAction
- [x] Hide share button from My Location and Map Center tabs
- [x] Request location services access when viewing a map (not the map list)
- [x] On first launch show Welcome map, not maps list. It will make for a more dramatic start to see a map up front. Learning about multiple maps is something that can come later.
- [x] Rewrite welcome map description
- [x] Investigate problems with Xcode 14 and iOS 16 :(

Sep 12:

- [x] Offset map center to make room for bottom sheets
- [x] Fix swipe to move on sheet tries to delete
- [x] Do not offset when drawing

Sep 11:

- [x] DocumentSheetViewModel
- [x] DocumentPickerViewModel
- [x] WaypointViewModel
- [x] OfflineMapsViewModel
- [x] Fix coordinate for sorting after adding new format.
- [x] Update migrations to use UUID for all records.
- [x] Fix renaming offline maps while they are downloading

Sep 9:

- [x] Fix document updates from document sheet

Sep 8:

- [x] CoordinateFormats in database

Sep 6:

- [ ] Remove waypoints from AppState. View model observes database for changes now
- [x] Redesign DocumentsView to use MVVM architecture
- [x] Rename activeDocument as currentDocument to match currentCoordinateFormat

Sep 5:

- [x] Understand SwiftUI. After many days of banging my head around SwiftUI and wondering why my list wasn’t animating because of where I would place objects I realized that when a list is annotated with animate(.default, viewModel.documentInfos) you can’t then get that documentInfos out of an EnvironmentObject and expect the list to animate correctly. Those documentInfos must be passed to the child struct and then all works as expected. This was an extremely expensive lesson to learn and I spent literally days trying to figure it out.

Aug 30:

- [x] Refactor to move all operations from reducer into view code and delete AppStore
- [x] Rename Settings to AppState
- [x] Clean up AppState

Aug 27:

- [x] Implement a good pattern for showing error messages but adopt “let it crash” for errors that should never fail (e.g., writes to the local database)

Aug 24:

- [x] Handle error when too big an area is downloaded
- [x] Handle error when tile limit is exceeded
- [x] Tile usage details
- [x] Add ability to sort offline maps by created At, name, tile count, disk usage

Aug 15:

- [x] Suggest waypoint name button
- [x] Cancel shows Retry or Delete buttons instead of immediately removing
- [x] Don’t restrict downloads over cellular, use system settings for that
- [x] Add OfflineMapDetailsView where it shows a map snapshot of the download region and buttons to delete, refresh, and rename.

Feb 10 - Aug 14, 2022

During this time I wasn't keeping accurate notes because I thought the app was only going to take "a couple of months, I mean how hard could it be?"

- [x] Improve Swift concurrency code and understanding 🎉
- [x] Persist coordinate formats when saving a new format
- [x] Rename Figures Only to Abbreviated
- [x] Improve layout of UTM and MGRS coordinate editors
- [x] Use abbreviated distance and bearing for map waypoint annotations
- [x] Remove unneeded advanced settings header from dev mode
- [x] Rename Go To as Move/Move To
- [x] Left align coordinate editors to match how coordinates are displayed
- [x] Allow changing format when editing coordinates in an editor.
- [x] Use bold font in coordinate editor to match font used to displays. LargeTitle bold
- [x] Add World Magnetic Model to show declination on navigate screen
- [x] Use Turf for distance and bearing math
- [x] Add swipe actions for waypoint table rows
- [x] Add waypoint delete confirmation
- [x] Add satellite and dark map styles
- [x] Add full screen camera mode
- [x] Add waypoint action button images
- [x] Investigate slow changing colors and styles on waypoint details. Solution works but doesn’t make sense.
- [x] Improve pattern for redux binding boilerplate code
- [x] Render points with different colours, shapes, icons
- [x] If current location is available show distance from points in points view
- [x] Give names for coordinate systems instead of using abbreviations
- [x] Add text clear button to text fields
- [x] Selected point gets dark border
- [x] Selected point is last drawn so it’s always on top
- [x] Draw line from current position to navigationWaypoint

- [x] Waypoints
  - [x] Show actual distance from current position on waypoints table (if available)
  - [x] Show color icon in waypoints table
  - [x] Allow editing point details, name, color, shape
  - [x] Points view subscribes to LocationManager for currentPosition?
  - [x] Show distance and bearing to point from current position (if available)
- [x] Navigation
  - [x] Point name
  - [x] Coordinate location
  - [x] Bearing to point
  - [x] Distance to point
  - [x] Current heading
- [x] Change state.waypoints back to dictionary of UUID: Waypoint for O(1) lookups of selected and navigation waypoints
- [x] Fix bottom sheet dark mode not taking
- [x] Replace Core Data with GRDB
- [x] Filter waypoints by name
- [x] Map Waypoints Settings

  - [x] Show Waypoint Name (Always | When Selected | Never)
  - [x] Show Coordinates When Selected
  - [x] Show Distance and Bearing When Selected
  - [x] Show Help Text When Selected

- [x] Add map waypoint visibility settings
- [x] Render selected map waypoint on top of all others
- [x] Selected point annotation bearing and distance updates as current position changes
- [x] Fix deleting waypoint from map sheet while ensuring it also works from Waypoints table view.
- [x] Tapping on selected waypoint shows waypoint details from map screen
- [x] Deleting a waypoint checks to see if it is selected and unselects it.
- [x] Show points in table view on Points tab
- [x] Create point
- [x] Implement location accuracy unit (feet or meters)
- [x] Selected Point state. Tap on map point to get coordinates otherwise only show name.
- [x] Tap on map but not annotation clears selected waypoint only if one is specified to prevent needless state changes.
- [x] Show points on map view
- [x] Fix Waypoints list/detail view. I think points needs to cached into an array from points model as the detail view isn’t showing the correct point details when a row is tapped
- [x] Consider renaming Points to Waypoints in UI as that is the correct term
- [x] Get point annotations looking good with color and shape on map and in points list and detail view
- [x] Use fixed width font on map annotations (requires editing map style?)
- [x] Save and restore created points into CoreData database
- [x] Tap to scroll/zoom to current position
- [x] Tap to show action menu buttons
- [x] Show position in selected format map cursor
- [x] Show distance and bearing “from me” to map centre cross hairs
- [x] Click nav arrow to move map to current position at current zoom level
- [x] Settings view changes AppStorage properties for user defaults
- [x] Add formatters for UTM and other coordinate systems
- [x] Fix location not showing updated coordinates
- [x] Add ability for user to select number of fractional digits
- [x] Add placeholder app icon
- [x] Fix location font size to work with large device text sizes, current at large text sizes text is truncated
- [x] Jun 5: Fix: Edit document date and click save when date picker open doesn’t dismiss sheet. Document is updated but sheet needs to be dragged to be closed as even repeated clicks to Save does nothing.

- [x] Jun 5: Move waypoints
- [x] Consider adding document name to map hud and providing a setting to hide it along with other settings to hide other information. Rejected: adds clutter and no good reason (yet) to have it.
- [x] Sort waypoints and documents

- [x] Jun 4: Add horizontal padding for description editor
- [x] Remove edit icon for waypoint description, not needed nor is it standard
- [x] Hide compass cardinal letter if navigation waypoint bearing near the cardinal value causing overlap

- [x] Fix can’t edit position format because in position format details the view keeps getting updated. Related to location being updated??

- [x] Fix random crash bug somewhat related map interactions and maybe to cancel delete confirmation but might be more subtle. Not sure how to duplicate yet. Seems to have vanished after redesigning Settings and moving each setting form into it’s own view. Possibly related??

- [x] Rethink waypoint actions
  - [x] Implement new waypoint menu
  - [x] Remove support for Project From in waypoint details
  - [x] Consider removing waypoint action menu and moving actions back to main view to make them easier to find. Action menu button could scroll view to the bottom
- [x] ActionsMenu
  - [x] DocumentSheet
  - [x] Dashboard sheet
  - [x] Compass sheet
  - [x] Tracker Recorder sheet
  - [x] Settings sheet
- [x] AddActionMenuButton
  - [x] Map Style
  - [x] 3D Mode
  - [x] Tracking Mode
  - [x] Mark map center
  - [x] Mark my location
  - [x] Project from me
- [x] DashboardSheet

  - [x] Coordinate Format editor
  - [x] Copy coordinate
  - [x] Zoom to coordinate
  - [x] Share coordinate

- [x] CompassSheet
- [x] NavigateToBadge
- [x] MapPropertiesSheet
- [x] WaypointSheet
- [x] Add sheet gripper to all bottom sheets (medium detents)

- [x] Setting: Show Map Center Coordinates)
- [x] Setting: Delete help text on map waypoints

- [x] Mark at coordinates (on map action menu)
- [x] Stub draw and measure (on map action menu)
- [x] Stub plot photos (on map action menu)

- [x] Consider subheadline vs caption for away, bearing on coordinate badge, check on device
- [x] Rethink all design map controls at top and under a top right menu

  - [x] Consider map type saved as part of the map document along with 3D status
  - [x] OR Consider having global settings separate from map settings and the global settings are in one area and the map settings are in another. This still might be possible with the 1 top right menu with all map settings under Map Details or Map Layers or Map Properties or Map Data and the rest of the stuff on that menu is setting global settings
    - [x] Toggle coordinate hud
    - [x] Toggle compass heading
    - [x] Toggle track recorder status

- [x] v2: Rethink coordinate formats. I think tapping on coordinates on bottom bar should quickly allow switching the format. From the format switcher it should be possible to configure coordinate formats from another page? Needs to work with Location sheet.

- [x] v1: Re-think coordinate formats and editor to be something simpler. E.g., Have a primary format and setting to define how many alternative formats you want. Waypoint details then shows primary and all alternative formats. Menu picker allows switching primary format to any of the configured formats. I guess this is like what I have so …. Maybe too complicated
- [x] Consider adding course arrow on compass
- [x] Top left compass widget animates arrow, font is sub headline? Same as what is used for badges. Bold. Reserve space for 4 digits for mils or 359d
- [x] Reduce size of compass wheel to at least have padding. Consider
- [x] Improve design of waypoint sheet to look like Maps
- [x] Coordinate HUD adds away, bearing text. E.g., 443m away, bearing 47d NE
- [x] Fix light mode on compass
- [x] Documents have user supplied date
- [x] Remove concept date and UUID from app environment, it isn’t getting used consistently and so it should be removed since it only adds complexity at this time.
- [x] Documents are used to organize waypoints, routes, tracks, notes, and drawings.
- [x] New documents have default name rather than blank to speed up creating.
- [x] Only one document is active.
- [x] You can make any inactive document active but you cannot make the active document inactive.
- [x] Waypoints in the active document are shown on the map.
- [x] New waypoints are created by default in the active document.
- [x] The active document cannot be deleted.
- [x] Rename layer to document in code and database
- [x] App first launch creates Default and Welcome! 🎉 documents

- [x] Build global alert state to handle errors
- [x] Correctly read files in place from iCloud
- [x] Share & export from action menu
- [x] Improve action sheet menu headings
- [x] Delete selected waypoint
- [x] Share waypoint as text with links to Apple and Google maps
- [x] Export waypoints as GPX file
- [x] Import GPX
- [x] Show course and speed on position tab
- [x] Save last used color and shape
- [x] Delete many waypoints
- [x] Project waypoint
- [x] Go to map coordinate

- [x] Consider renaming app to Awesome GPS

- [x] Refactor motion manager to act like location manger
- [x] Fix waypoint editor bug when half shown on map sheet (and maybe compass). CPU seems to be running hot when doing this and changing color and shape doesn’t reliably work. Feels like something is going crazy in an update loop
- [x] Add compass to navigate screen

  - [x] Use Gyroscope API to show pitch and roll in centre of compass
  - [x] Add hepatic feedback when rotating compass through medium ticks, e.g., every 20-30 degrees
  - [x] Show level bubble indicator
  - [x] Show inclination gauge and read out
  - [x] Show declination on compass screen
  - [x] Rename navigation tab to “Compass”
  - [x] Fix declination calculation on navigate screen (sometimes is wrong when compass heading changes between 0..16 deg)
  - [x] Smoothly animate compass rotation

- [x] Add concept of DistanceUnits
- [x] Add concept of BearingUnit (degrees or mils)
- [x] Rename Location Format to Position Format
- [x] Use Figures Only for Abbreviated AND Signed
- [x] Elevation on position screen in mono font
- [x] Pager (vs table picker) for selecting position format on position screen
- [x] Improve location format editing
- [x] Add created and updated at time stamps to waypoint details
- [x] Edit waypoint notes
- [x] Edit waypoint altitude

- [x] Remove selected waypoint from document menu, it is confusing
- [x] Tap map cursor to show MapCenterSheet
- [x] Try PositionRow (FormattedCoordinateView) on Waypoint view instead of CoordinateStack and see how it feels to use that
- [x] Make coordinate and distance bearing badges expandable on map

- [x] Snap to waypoint when scrolling map to show name on map and change distance and bearing badge content
- [x] Tap current location blue dot to show MyLocationSheet
- [x] Refactor map tap callback to return MapContentKind

- [x] Determine why app is running at 35% CPU when doing nothing but showing the map or even list of maps

  - [x] I hate to see this because it’s easy to blame MapBox but I think it is MapBox…
  - [x] Try: Profile MapBox example app to see how it acts with energy
  - [x] Try: MapKit app with MapBox 2D tiles to see if that is the direction I should go. This means losing the 3D view.
  - [x] Even MapKit runs high CPU on basic example. Maps are energy drainers. Be aware!

- [x] Implement go to coordinate on map center sheet to find coordinates from 105 Hikes

- [x] Course and speed on compass page always
- [x] Consider document details getting pushed into nav stack instead of presented as a sheet. NO: Decided against because when clicking show on waypoint details to get back to map view it is much nicer to simply dismiss the sheet and reveal the map vs going back multiple levels to get to map.
- [x] Redesign My Location sheet to follow patterns in Map Center

- [x] Settings all one screen. Link to coordinate formats as popup?
- [x] Consider disclosure icon in menu for 4 edit items on waypoint menu. Nope, doesn’t make sense. Normally this would mean a sub menu is appearing so hard to justify why I should be using it.
- [x] DocumentSheet details section, replace edit icon with disclosure icon
- [x] Coordinate formats shows precision
- [x] Swipe right to edit coordinate format
- [x] Replace Cancel with Close button on coordinate format picker

- [x] Redesign Waypoint sheet to follow patterns in Map Center
  - [x] When pushed in table view
    - [x] Remove close button
    - [x] Show share button in toolbar
    - [x] Consider reducing negative margin adjustment, text seems almost too tight
  - [x] Confirm delete when using bottom delete button and change from red text to primary text, confirmation delete should be red
  - [x] Consider adding Edit Altitude and Edit Description menu items -or- removing Rename and Edit Coordinate menu items
  - [x] Consider spacer(minWidth: 0) for in title to see if Cafe au Clay waypoint title can have more room. Seems to wrap too early
- [x] Ensure dismiss works as expected in both contexts (bottom sheet and pushed from document sheet)
- [x] Implement waypoint Project From
- [x] Implement waypoint Rename
- [x] Consider moving waypoint color and shape to rename editor
- [x] Sunset/sunrise cell
- [x] Moon phase cell
- [x] Enable globe projection
- [x] Change title to Rename for waypoint name and mark editor
- [x] Waypoint delete button should be entire bubble?
- [x] Always confirm before deleting waypoint and making button red (destructive)
- [x] Add other actions as buttons at bottom
- [x] Declination cell has disclosure indicator to popup declination picture
- [x] GPS signal correctly shows last update and signal strength description
- [x] Rotate the moon emoji to match the moon illumination angle. Date and time moon info does this.
- [x] Consider not using monospaced for waypoint title. Just largeTitle might be fine. Yes, works well.
- [x] Map center sheet should not show distance and bearing when tracking location because it doesn’t make sense when interpolating.
- [x] My location badge should use map center when tracking to get interpolated coordinates. The sheet is doing this but the badge is not. But when not tracking use the current location coordinates. This isn’t happening which means my location sheet is not updating when not tracking.
- [x] Reconsider gps signal strength. very good, good, OK, weak, very weak. V good is < 10m
- [x] Add 2D Topo map custom url to turn on atmosphere and globe projection. Ensure globe and atmosphere is on for all map styles.
- [x] Option to show only map cursor description but not coordinate but also distance and bearing. Actual coordinate isn’t that interesting.
- [x] Info button top left of documents view brings up about sheet
- [x] Change accuracy to precision when dealing with coordinate formats. Accuracy should be for gps derived data. I don’t think they should be confused.

  - [x] Remove accuracy on coordinate format list
  - [x] Hide accuracy on coordinate for Waypoint view
  - [x] Hide accuracy on coordinate for Map Center sheet
  - [x] Show precision (renamed from accuracy) when editing a coordinate format under the fractional digits (not in the coordinate cell)

- [x] Fix bug: select waypoints on document sheet flashing and losing state

- [x] Use same font size on nav to badge as compass badge
- [x] Add my location button to compass when not navigating to waypoint. Remove altitude and declination from compass sheet since it is now available from my location. Consider always having my location be available from compass sheet.
- [x] Switch waypoint view cells to match other sheets
- [x] Add hepatic feedback when tapping on map content

- [x] Merge About and Settings leaving only Settings. Put the About page at the top of the settings. Settings gear icon in top left on Maps screen and in action menu in Map AND Maps menu so gear icon and Settings can be explicitly linked (replaces Amount menu item on Maps menu)
- [x] Convert MapCenter and MyLocation sheets to Form to have same look as WaypointForm (rename WaypointView to WaypointForm). Or consider making them all List? Waypoint probably has to be a form as it can be pushed from DocumentSheet
- [x] Implement actions on MapCenter/MyLocation sheet button and menu actions

- [x] When editing waypoint name it’s possible to lose name changes if tapping navigate before saving. A good reason to move editing name to it’s own editor so as to get rid of clear text box and make sheet layout be without a navigation bar.

- [x] Navigation waypoint map annotation not updating origin from current location. Sticks to where navigate was performed.

Feb 10, 2022

- [x] Intial Commit, what have I started?
