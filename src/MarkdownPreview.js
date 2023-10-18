import React from 'react'
import {marked} from 'marked'
import {ReactComponent as ICON_EYE_SHOW} from './assets/icons/eye-fill.svg'
import {ReactComponent as ICON_EYE_HIDE} from './assets/icons/eye-slash-fill.svg'
import './MarkdownPreview.css'

marked.use({
    gfm: true,
    breaks: true
})

class MarkdownPreview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            markdown_raw: `# Markdown Editor\n\n## Basic Syntax\n### Headings Block\n# Heading 1\n## Heading 2\n### Heading 3\n#### Heading 4\n##### Heading 5\n###### Heading 6\n\n### Paragraph Block\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis in feugiat fringilla. Aenean porttitor efficitur diam aliquet sagittis. Nam a arcu purus. Vivamus maximus mi sed nulla condimentum tincidunt. Cras at tincidunt massa, blandit rhoncus neque.\n\n### Italic Block\n*Italized Text*\n\n### Bolded Block\n**Bolded Text**\n\n### Inline Code Block\n\`var a = hello world;\`\n\n### Multi Line Code Block\n\`\`\`\n//This is a comment\nlet a = 'Hello World!'\n\`\`\`\n\n### Link Block\n[Pikachu Image](https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png)\n\n### Text Combibation\nYou can combine different text block to highlight different parts of a text. For example you can use a **bolded text** in this part of the paragraph. Maybe even *\"Italized this part of the paragraph to highlight quotes\"* of this paragraph. You can also insert code blocks to explain a code. Like \`var a = Hello World\` means that you are a assigning a string value of \"Hello World\" to a variable named \"a\". You can even insert a [google](https://www.google.com) link inside a paragraph.\n\n### Blockquote Block\n>\"For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.\"\n\n### Image Block\n![Pikachu Image](https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png)\n\n### Image Block (Full Width)\n![Landscape Image](https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80)\n\n### Unordered List\n- First Item [facebook](https://www.facebook.com)\n- **Second Item**\n- *Third Item*\n- This is a \`code block\` inside a list.\n\n### Ordered List\n1. First Item [facebook](https://www.facebook.com)\n2. **Second Item**\n3. *Third Item*\n4. This is a \`code block\` inside a list.`,
            display_preview: false
        }
        this.UpdateRawMarkdown = this.UpdateRawMarkdown.bind(this)
        this.DisplayPreview = this.DisplayPreview.bind(this)
    }

    UpdateRawMarkdown(ev) {
        this.setState({
            markdown_raw: ev.target.value
        })
    }

    DisplayPreview() {
        this.setState((state) => ({
            display_preview: !state.display_preview
        }))
    }

    render() {
        return(
            <div className='interface-main'>
                <div className='interface-toolbar'>
                    <div className='toolbar-label'>
                        <div className='title'>Markdown Previewer</div>
                        <div className='caption'>Edit Markdown Files</div>
                    </div>
                    <div className='btn-icon-text' onClick={this.DisplayPreview}>
                        <div className='icon'>
                            {(this.state.display_preview) ? <ICON_EYE_HIDE /> : <ICON_EYE_SHOW />}
                        </div>
                        <div className='label'>{(this.state.display_preview) ? 'Hide Preview' : 'Show Preview'}</div>
                    </div>
                </div>
                <div className='interface-editor'>
                    <textarea id='editor' value={this.state.markdown_raw} onChange={this.UpdateRawMarkdown}/>
                    <div id='preview' className={(this.state.display_preview) ? 'show' : 'hidden'} dangerouslySetInnerHTML={{__html: marked.parse(this.state.markdown_raw)}}></div>
                </div>
            </div>
        )
    }
}

export default MarkdownPreview