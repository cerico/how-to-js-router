import { GlossopComponent } from './components/glossop'
import { KendalComponent } from './components/kendal'
import { DefaultComponent } from './components/default'

export const routes = [
    {title:'glossop', path: 'glossop/nested', component:GlossopComponent},
    {title: 'kendal', path: 'kendal/refactored', component: KendalComponent},
    {title: 'index', path: '', component: DefaultComponent}
]