(function ($) {

	$.fn.translate = function (domain) {
		if (!domain) {
			domain = 'default';
		}
		var source = this.attr('translatable');
		if (!source) {
			return this;
		} else {
			var translation = Pomo.getText(source, {
				domain: domain
			});
			if (translation) {
				this.html(translation);
				return this;
			}
		}

	};
	$.fn.getPORow = function (domain) {
		if (!domain) {
			domain = 'default';
		}
		var source = this.attr('translatable');
		if (!source) {
			return this;
		} else {
			console.log("msgid"+' "'+source+'"\n'+"msgstr"+' "'+source+'"\n');
			return this;
		}

	};

	$.extend(jQuery.expr[':'], {
		translatable: function (el) {
			if ($(el).attr('translatable')) {
				return true;
			}
			return false;
		}
	});


}(jQuery));