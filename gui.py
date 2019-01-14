from flexx import flx

class Example(flx.Widget):


    name = flx.StringProp('John Doe', settable=True)
    age =  flx.IntProp(22, settable=True)

    '''def init(self):
            with flx.HSplit ():
                flx.Button(text='hello', flex=1)
                flx.Button(text='world', flex=1)
                flx.Button(text='hello', flex=1)

                flx.Button(text='world', flex=1)
                flx.Button(text='hello', flex=1)
                flx.Button(text='world', flex=1)
    
                flx.Button(text='hello', flex=1)
                flx.Button(text='world', flex=1)
                flx.Button(text='hello', flex=1)
'''
    def _create_dom(self):
        # Use this method to create a root element for this widget.
        # If you just want a <div> you don't have to implement this.
        return flx.create_element('div')  # the default is <div>


    def _render_dom(self):
        # Use this to determine the content. This method may return a
        # string, a list of virtual nodes, or a single virtual node
        # (which must match the type produced in _create_dom()).
        return [
                '''flx.create_element('table', flx.create_element('tr', flx.create_element('td', "hello world")),
                flx.create_element('tr', flx.create_element('td', "hello world")),
                flx.create_element('tr', flx.create_element('td', "hello world"))
                ), flx.create_element('div', {}, 'Hello ben')'''
                flx.create_element('span', {},
                    'Hello', flx.create_element('b', {}, self.name), '! '),
                flx.create_element('span', {},
                    'I happen to know that your age is %i.' % self.age),
                flx.create_element('br'),
                flx.create_element('button', {'onclick': self.increase_age},
                    'Next year ...')
                ]
               
app = flx.App(Example)
app.export('example.html', link=0)  # Export to single file

app.launch('browser')  # to run as a desktop app
# app.launch('browser')  # to open in the browser
flx.run()  # mainloop will exit when the app is closed

